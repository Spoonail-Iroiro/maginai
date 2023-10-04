import logging from 'loglevel';
import { Patcher } from './patcher.js';
import { ModEvent } from './event/mod-event.js';
import { version as VERSION } from './version.js';
import * as maginaiImage from './maginai-images';
import {
  ModCommandKey,
  MOD_COMMAND_KEY_CODES,
} from './control/mod-command-key.js';

const logger = logging.getLogger('maginai');

/**
 * Canvas control class for showing information about maginai (e.g. labels on title screen)
 */
class MaginaiImage {
  constructor() {
    /**
     * @internal
     */
    this.cvs = new OffscreenCanvas(500, 100);
    /**
     * @internal
     * @type {OffscreenCanvasRenderingContext2D}
     */
    this.ctx = this.cvs.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
  }

  /**
   * @private
   * 画面にmaginaiの情報を表示するためのcanvas,context,rectを作成し返す
   * @param {boolean} isMainFailed
   * @param {[(Error|ErrorEvent), string][]} failedMods
   * @return {maginaiTypes.DrawInfoRect} drawInfo
   */
  getImageInfo(isMainFailed, failedMods) {
    const gm = tWgm;
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    const mainInfo = gm.tGameText.createText({
      text: `%c[saveimport]Mod loader 'maginai' v${VERSION}`,
      maxWidth: 500,
      fontSize: 13,
      lineHeight: 0.2,
      strokeData: {
        color: isMainFailed ? 'rgba(255,0,0,0.5)' : 'rgba(0,0,0,0.5)',
        width: 4,
      },
    });
    let height = 0;
    height += mainInfo.height;
    let width = mainInfo.width;
    maginaiImage.pasteTLWH(this.ctx, mainInfo, 0, 0);

    if (failedMods && failedMods.length != 0) {
      const modsText =
        '%c[saveimport]Mod load failed:' +
        failedMods.map((e) => e[1]).join(',');

      const modsInfo = gm.tGameText.createText({
        text: modsText,
        maxWidth: 1024,
        fontSize: 13,
        lineHeight: 0.2,
        strokeData: {
          color: 'rgba(255,0,0,0.5)',
          width: 4,
        },
      });
      const bottom = height;
      maginaiImage.pasteTLWH(this.ctx, modsInfo, 0, bottom);
      height += modsInfo.height;
      width = Math.max(width, modsInfo.width);
    }

    return {
      cvs: this.cvs,
      ctx: this.ctx,
      rect: [0, 0, width, height],
    };
  }

  /**
   * targetLayerにmaginaiの情報を描画
   * @param {object} targetLayer
   * @param {boolean} isMainFailed
   * @param {[(Error|ErrorEvent), string][]} failedMods
   */
  draw(targetLayer, isMainFailed, failedMods) {
    const info = this.getImageInfo(isMainFailed, failedMods);
    const dx = 5;
    const dy = targetLayer.cvs.height - info.rect[3];
    const drawRect = [dx, dy, info.rect[2], info.rect[3]];
    // targetLayer.ctx.clearRect(...drawRect);
    maginaiImage.pasteRect(targetLayer.ctx, info, drawRect[0], drawRect[1]);
  }
}

/**
 * `maginai.events`サブモジュールクラス
 * 直接インスタンス化せず`maginai.events`から使用してください
 *
 * 各Modはここで定義されているイベントの`addHandler`を呼び出しハンドラを登録可能
 * ```js
 * const ev = maginai.events;
 * ev.gameLoadFinished.addHandler(() => {
 *   console.log("ロード終了")
 * });
 * ```
 */
export class MaginaiEvents {
  /**
   * tGameMainがnewされtWgmにセットされた時
   * ※ゲームデータのロードは終わっていない可能性あり
   * callback type: `({}) => void`
   */
  tWgmLoaded = new ModEvent('tWgmLoad');

  /**
   * @deprecated old name of tWgmLoaded
   */
  tWgmLoad = this.tWgmLoaded;

  /**
   * 毎フレーム・本来の処理の前
   * callback type: `({frame: number}) => void`
   *   `frame` 前回更新からの経過フレーム
   */
  beforeRefresh = new ModEvent('beforeRefresh');

  /**
   * 毎フレーム・本来の処理の後
   * callback type: `({frame: number}) => void`
   * - `frame` 前回更新からの経過フレーム
   */
  afterRefresh = new ModEvent('afterRefresh');

  /**
   * ゲームデータのロードが終了し、1度目のタイトル画面表示直前
   * callback type: `({}) => void`
   */
  gameLoadFinished = new ModEvent('gameLoadFinished');

  /**
   * セーブデータのロードが終了し、操作可能となる直前
   * またはゲームをはじめから開始時、はじまりの地が表示される時
   * イベント引数のisNewGameは前者の場合false、後者の場合true
   * callback type: `({isNewGame: boolean}) => void`
   */
  saveLoaded = new ModEvent('saveLoaded');

  /**
   * Mod用コマンドキーがクリックされた時のイベント
   * Mod用コマンドキーの一覧はmaginai.MOD_COMMAND_KEY_CODESを参照
   *
   * 設定されるハンドラーはキーを処理する場合trueを返す必要がある
   * また引数eのe.endを呼び出すまでデフォルト状態の更新が一時停止されキー受付を止めるため、
   * タイトル画面に戻るなどの一部例外を除いては、処理終了時にe.endを呼び出す必要がある
   * callback type: `({keyCode: string, end: ()=>void}) => boolean`
   * - `keyCode` クリックされたキーのキーコード
   * - `end` デフォルト状態へ戻る関数
   * ```js
   * maginai.events.commandKeyClicked.addHandler((e) => {
   *   // このハンドラーではF1キーが押されたときに処理を行う
   *   if (e.keyCode === 'f1') {
   *     console.log('F1キーが押されました')
   *     // 処理完了時はe.end()を呼び再びデフォルトの状態でキー入力可能にする
   *     e.end();
   *     // ここではすぐに処理が完了するためe.endを同期的に呼んでいるが
   *     // メニューを開くなど非同期的処理が行われる場合は処理完了時の
   *     // コールバック内等で呼ぶ必要がある
   *
   *     // 処理対象のキーが押されたのでtrueを返す（後続のキー処理は行われなくなる）
   *     // ※trueを返さない場合他のキー処理と重複し予期しない結果になる可能性がある
   *     return true;
   *   }
   *   // F1キー以外が押されたときはスルー（trueを返さない、e.endも呼ばない）
   * });
   * ```
   */
  commandKeyClicked; // ModCommandKeyのフィールドから公開
}

export class Maginai {
  constructor() {
    /**
     * @internal
     * loadJsで読み込まれたことのあるJavaScriptパス
     * @type {Record<string,boolean>}
     */
    this.loadedJs = {};

    /**
     * @internal
     * gameLoadFinishedイベントが発生したことがあるならtrue、ないならfalse
     * 上記イベントの制御用
     */
    this.isGameLoadFinished = false;

    /**
     * @internal
     * tWgmを1度だけ初期化するために$(document).readyとmain postprocessの
     * どちらか遅い方で初期化する必要があるのでその制御用
     * 早い方（`new tGameMain`しない）が呼び出されたかどうかのフラグ
     */
    this.isFirstDummytWgmMainLoadFinished = false;

    /**
     * ダミーに差し替える前のtGameMain
     * maginaiでは`new tGameMain()`を遅らせるため、`tGameMain`クラスを
     * ダミーにパッチするため、Modからは`tGameMain`でアクセスできなくなる
     * もし本来の`tGameMain`のメソッドにパッチしたいなどでアクセスする場合
     * この`origtGameMain`を使用すること
     * @type {any}
     */
    this.origtGameMain = null;

    /**
     * @internal
     * 各Modのロード中に発生したエラーについて、エラーとModNameの組のlist
     * @type {[(Error|ErrorEvent), string][]}
     */
    this.errorsOnLoadMods = [];

    /**
     * @internal
     * Modのロードのメインプロセスでエラーが発生したかどうか（個別Modは関係なし）
     * 初期はtrueで成功で完了時にfalseにセット
     * タイトルへの表示等用
     */
    this.isModLoadFatalErrorOccured = true;

    /**
     * @internal
     * タイトル画面等への情報表示用Canvas制御クラス
     * @type {MaginaiImage?}
     */
    this.image = null;

    /**
     * @internal
     * ゲーム内ログへ出力するメッセージのキュー
     * @type {string[]}
     */
    this.inGameDebugLogQueue = [];

    /**
     * @internal
     * ロード中のModのPostprocess
     * Modのロード→Mod自身の`init.js`から`setModPostprocess`でset→maginaiから`popModPostprocess`でpopし実行→次のModのロード…
     * というサイクルでPostprocessを実行する
     * @type {Promise<any>}
     */
    this.currentModPostprocess = null;

    /**
     * @internal
     * Modコマンドキー設定用クラスオブジェクト
     */
    this.modCommandKey = new ModCommandKey();

    /**
     * Modコマンドキーとして設定可能なキーコード
     */
    this.MOD_COMMAND_KEY_CODES = MOD_COMMAND_KEY_CODES;

    // 以下サブモジュールの公開
    /**
     * `maginai.patcher`サブモジュール
     * メソッドのパッチに便利なメソッドを提供する
     * 詳細は`Patcher`クラス定義へ
     */
    this.patcher = new Patcher();

    /**
     * `maginai.logging`サブモジュール===`loglevel`モジュール（maginai用に設定済）
     * maginai用各Modでのログはこれを使用することが推奨されます
     * ```js
     * const logger = maginai.logging.getLogger("myMod") // getLoggerの引数はMod名を推奨
     * // ログレベルはtrace/debug/info/warn/errorの5段階
     * logger.info('infoレベルログ')
     * logger.debug('debugレベルログ')
     * ```
     */
    this.logging = logging;

    /**
     * `maginai.events`サブモジュール
     * 各種のイベント（`ModEvent`オブジェクト）を定義しておりハンドラーの設定などが可能
     * 詳細は`MaginaiEvents`定義へ
     */
    this.events = new MaginaiEvents();
    this.events.commandKeyClicked = this.modCommandKey.commandKeyClicked;
  }

  /**
   * @internal
   * 初期化処理（union.jsのロードが必要）
   * Maginaiのインスタンス作成だけであればunion.jsは不要
   */
  init() {
    logger.info(`Mod loader 'maginai' v${VERSION}`);

    // Name shortcuts and control 'this' bind
    this.image = new MaginaiImage();
    const magi = this;
    const ev = this.events;

    // viewTitleにパッチし、タイトル表示時にgameLoadFinishedイベントがinvokeされるようにする
    this.patcher.patchMethod(tGameTitle, 'viewTitle', (origMethod) => {
      const rtnFn = function (...args) {
        if (!magi.isGameLoadFinished) {
          ev.gameLoadFinished.invoke({});
          magi.isGameLoadFinished = true;
        }
        return origMethod.call(this, ...args);
      };
      return rtnFn;
    });

    // loadActにパッチし、セーブロード時にsaveLoadedイベントがinvokeされるようにする
    this.patcher.patchMethod(tGameSave, 'loadAct', (origMethod) => {
      const rtnFn = function (a, b, c, callback, ...args) {
        const newCallback = (isOk, ...cbArgs) => {
          const cbRtn = callback(isOk, ...cbArgs);
          if (isOk) {
            magi.events.saveLoaded.invoke({ isNewGame: false });
          }
          return cbRtn;
        };
        return origMethod.call(this, a, b, c, newCallback, ...args);
      };
      return rtnFn;
    });

    // ゲームをはじめから開始した場合はloadActが呼び出されないため
    // tGameOpening.viewに渡されるcallback実行後にsaveLoadedイベントが
    // invokeされるようにする
    this.patcher.patchMethod(tGameOpening, 'view', (origMethod) => {
      const rtnFn = function (a, callback, ...args) {
        const newCallback = (...cbArgs) => {
          const cbRtn = callback(...cbArgs);
          magi.events.saveLoaded.invoke({ isNewGame: true });
          return cbRtn;
        };
        return origMethod.call(this, a, newCallback, ...args);
      };
      return rtnFn;
    });

    // setCallBackにパッチし、毎フレーム呼び出される本来のcallbackの前後でbeforeRefresh/afterRefreshイベントがinvokeされるようにする
    this.patcher.patchMethod(
      tGameRefresh,
      'setCallBack',
      function (origMethod) {
        const rtn = function (fn) {
          origMethod.call(this, function (frame) {
            if (ev.beforeRefresh.hasHandler) ev.beforeRefresh.invoke({ frame });
            fn.call(this, frame);
            if (ev.afterRefresh.hasHandler) ev.afterRefresh.invoke({ frame });
          });
        };
        return rtn;
      }
    );

    // Mod情報をタイトル画面に描画するためにdrawBackground_titleにパッチ
    this.patcher.patchMethod(
      tGameTitle,
      'drawBackground_title',
      (origMethod) => {
        // 本来渡されたCBの前にタイトル画面描画を行う新しいCBを作り、それを渡してもとのメソッドを呼び出す
        // newMethod is...
        const rtnFn = function (callback, ...args) {
          // Inject drawing labels for maginai, before passed callback called
          const newCB = (isOk, ...cbArgs) => {
            if (isOk) {
              magi.image.draw(
                tWgm.screen.layers.ground,
                magi.isModLoadFatalErrorOccured,
                magi.errorsOnLoadMods
              );
            }
            callback(isOk, ...cbArgs);
          };
          // call origMethod with new callback and return through
          const rtn = origMethod.call(this, newCB, ...args);
          return rtn;
        };
        return rtnFn;
      }
    );

    //logToInGameLogDebugでゲーム内ログ出力するためaddAndViewLogにパッチ
    this.patcher.patchMethod(tGameLog, 'addAndViewLog', (origMethod) => {
      const rtnFn = function (...args) {
        const rtn = origMethod.call(this, ...args);

        for (let message of magi.inGameDebugLogQueue) {
          origMethod.call(this, message);
        }
        // clear
        magi.inGameDebugLogQueue.length = 0;
        return rtn;
      };
      return rtnFn;
    });

    const readyLogger = magi.logging.getLogger('maginai.ready');

    // Modのロード前にゲームがロードされるのを防ぐためtGameMainクラスをダミーに置き換える
    // （tGameMainのnew≒ゲームの諸々の初期化）
    // このためModからtGameMainクラスにアクセスする場合はmaginai.origtGameMainを参照する必要がある
    this.origtGameMain = tGameMain;
    tGameMain = function (...args) {
      if (!magi.isFirstDummytWgmMainLoadFinished) {
        readyLogger.debug(`First dummy tWgm load`);
        magi.isFirstDummytWgmMainLoadFinished = true;
        return {};
      } else {
        try {
          readyLogger.debug(`Second true tWgm load`);
          // loadtWgm自体がtWgmを設定するが、そのまま返す（のでもう一度tWgmへの代入が行われるが、特に影響なし）
          const rtn = magi.loadtWgm();
          return rtn;
        } catch (e) {
          readyLogger.error(`Fatal error occured during new tGameMain()`);
          magi.isModLoadFatalErrorOccured = true;
          throw e;
        }
      }
    };

    // Modコマンドキー関連のパッチ
    this.modCommandKey.init();
  }

  /**
   * @internal
   * ゲームをロードする
   * @return {any} new tGameMain({})
   */
  loadtWgm() {
    tWgm = new this.origtGameMain({});
    this.ontWgmLoaded({});
    return tWgm;
  }

  /**
   * @internal
   * ゲームのロード直後処理
   * @param {object} e
   */
  ontWgmLoaded(e) {
    // tWgmLoadイベント発生
    this.events.tWgmLoaded.invoke(e);
    // C#スタイルで、イベントを呼ぶべき処理自体をメソッドに抜き出し（継承のため）しているが不要かも
  }

  /**
   * JavaScriptファイルをロード
   * DOM操作でscriptタグによりロードし、ロードしたscript要素を含むオブジェクトを返す
   * @param {string} path
   * @return {Promise<{script:HTMLScriptElement}}
   */
  async loadJs(path) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    // async functionだがPromiseを明示的に返す
    // 外部から見たときに非同期関数としてわかりやすくする/内部で発生するエラーを非同期エラーとするため
    // async functionでない場合例えば上のcreateElementでの例外は同期エラーとなり.catchで捕捉できない
    const promise = new Promise((resolve, reject) => {
      script.onload = () => {
        this.loadedJs[path] = true;
        logger.debug(`Script loaded: ${path}`);
        resolve({ script });
      };
      script.onerror = (e) => {
        script.parentNode.removeChild(script);
        logger.error(`Script load failed: ${path}`);
        reject(e);
      };
    });
    script.src = path;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
    return promise;
  }

  /**
   * JavaScriptファイルから`var LOADDATA=...`で定義されたデータをロードし返す
   * 非同期
   * @param {string} path
   * @returns {Promise<any>} ロードされたデータ
   */
  async loadJsData(path) {
    const e = await this.loadJs(path);
    e.script.parentNode.removeChild(e.script);
    const loaded = LOADDATA;
    LOADDATA = undefined;
    return loaded;
  }

  /**
   * ゲーム内ログへログ出力する（デバッグ用）
   * ゲーム内の処理でログが出力されるときに"相乗り"して出力するため、タイトル等で呼んでも確実に出力されるかわりに
   * 出力タイミングが遅れる可能性あるため、デバッグやエラー表示目的での使用を意図している
   * MOD動作本来のログ（アイテムの使用表示等）は直接`addAndViewLog`を使用することを推奨
   * @param {string} message
   */
  logToInGameLogDebug(message) {
    // option is not used currently
    this.inGameDebugLogQueue.push(message);
  }

  /**
   * ModのJavaScriptロード後に実行される`Promise`をセットする
   * `init.js`実行中のMod自身から呼ぶべきであり、それ以外の場面で呼んではいけない
   * `Promise`でないものも`Promise.resolve()`で変換して受け付け、エラーにならない
   * @param {Promise<any>} promise
   */
  setModPostprocess(promise) {
    this.currentModPostprocess = Promise.resolve(promise);
  }

  /**
   * @private
   * ModのJavaScriptロード後に実行されるPromiseをpopする
   * 事前にsetされていなくてもPromise.resolve()を返し、エラーにならない
   * @return {Promise<any>} setされていたPromise
   */
  popModPostprocess() {
    const rtn = this.currentModPostprocess ?? Promise.resolve();
    this.currentModPostprocess = undefined;
    return rtn;
  }

  /**
   * @private
   * 1Modのロード処理
   * 独自エラーハンドラのset→Mod init.jsのロード→Postprocessのpopと実行→独自エラーハンドラをunset
   * 独自エラーハンドラによりどのModからエラーが発生したかの識別と集計が可能
   * 集計はerrorsOnLoadModsに集められる
   * またエラーは外に伝搬しないため、個別のModのエラーは他のModやメイン処理に影響しない
   * 非同期
   * @param {string} modName
   */
  async loadOneMod(modName) {
    const abortController = new AbortController();
    const onError = (e) => {
      logger.error('Error during mod loading:', modName, e.error ?? e);
      this.errorsOnLoadMods.push([e, modName]);
    };
    try {
      window.addEventListener('error', onError, {
        signal: abortController.signal,
      });
      await this.loadJs(`./js/mod/mods/${modName}/init.js`);
      await this.popModPostprocess();
    } catch (e) {
      this.popModPostprocess(); // Ensure no postprocesses are remained
      onError(e);
    } finally {
      logger.info(`Mod loaded: ${modName}`);
      abortController.abort();
    }
  }

  /**
   * @internal
   * ロード処理 - すべてのModのロードからゲームロード終了まで
   * mods_load.jsのmodsから読み込み順と対象modNameを取得
   * 各modNameで1modのロード処理（getModLoadPromise参照）を生成し連結
   * その後はloadtWgmでゲームロード開始
   * 非同期
   */
  async loadMods() {
    const postProcessLogger = this.logging.getLogger('maginai.postprocess');
    try {
      const loaded = await this.loadJsData('./js/mod/mods/mods_load.js');

      for (const modName of loaded['mods']) {
        await this.loadOneMod(modName);
      }

      logger.info('Completed loading all mods. Starting the game...');

      if (!this.isFirstDummytWgmMainLoadFinished) {
        postProcessLogger.debug('First dummy tWgm load. Doing nothing');
        this.isFirstDummytWgmMainLoadFinished = true;
      } else {
        postProcessLogger.debug('Second true tWgm load');
        this.loadtWgm();
      }
      // ※readyの方でtrueに設定し直される可能性がある
      this.isModLoadFatalErrorOccured = false;
    } catch (e) {
      // 各Modでのエラーはそれぞれで処理済のため、ここでcatchされるのはfatal errorのはず
      // （必要なファイルが存在しない、mod_load.jsの構造がおかしい…etc）
      logger.error('Mod load main proccess failed:', e);
      throw e;
    }
  }
}
