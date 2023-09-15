import _log from './logging.js';
import logging from 'loglevel';
import { Patcher } from './patcher.js';
import { ModEvent } from './mod-event.js';
import { version as VERSION } from './version.js';
import * as maginaiImage from './maginai-images';

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
     * @type {OffscreenCanvasRenderingContext2D}
     * @internal
     */
    this.ctx = this.cvs.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
  }

  /**
   * 画面にmaginaiの情報を表示するためのcanvas,context,rectを作成し返す
   * @param {boolean} isMainFailed
   * @param {[(Error|ErrorEvent), string][]} failedMods
   * @return {maginaiTypes.DrawInfoRect} drawInfo
   * @private
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
class MaginaiEvents {
  /** tGameMainがnewされtWgmにセットされた時
   * ※ゲームデータのロードは終わっていない可能性あり */
  tWgmLoad = new ModEvent('tWgmLoad');
  /** key press */
  // keyClick = new ModEvent("keyClick");
  /** 毎フレーム・本来の処理の前 */
  beforeRefresh = new ModEvent('beforeRefresh');
  /** 毎フレーム・本来の処理の後 */
  afterRefresh = new ModEvent('afterRefresh');
  /** ゲームデータのロードが終了し、1度目のタイトル画面表示直前 */
  gameLoadFinished = new ModEvent('gameLoadFinished');
}

class Maginai {
  constructor() {
    /**
     * loadJsで読み込まれたことのあるJavaScriptパス
     * @type {Record<string,boolean>}
     * @internal
     */
    this.loadedJs = {};

    /**
     * gameLoadFinishedイベントが発生したことがあるならtrue、ないならfalse
     * 上記イベントの制御用
     * @internal
     */
    this.isGameLoadFinished = false;

    /**
     * ダミーに差し替える前のtGameMain
     * @internal
     * @type {any}
     */
    this.origtGameMain = null;

    /**
     * 各Modのロード中に発生したエラーについて、エラーとModNameの組のlist
     * @internal
     * @type {[(Error|ErrorEvent), string][]}
     */
    this.errorsOnLoadMods = [];

    /**
     * Modのロードのメインプロセスでエラーが発生したかどうか（個別Modは関係なし）
     * 初期はtrueで成功で完了時にfalseにセット
     * タイトルへの表示等用
     * @internal
     */
    this.isModLoadFatalErrorOccured = true;

    /**
     * タイトル画面等への情報表示用Canvas制御クラス
     * @internal
     * @type {MaginaiImage?}
     */
    this.image = null;

    /**
     * ゲーム内ログへ出力するメッセージのキュー
     * @internal
     * @type {string[]}
     */
    this.inGameDebugLogQueue = [];

    /**
     * ロード中のModのPostprocess
     * Modのロード→Mod自身の`init.js`から`setModPostprocess`でset→maginaiから`popModPostprocess`でpopし実行→次のModのロード…
     * というサイクルでPostprocessを実行する
     * @internal
     * @type {Promise<any>}
     */
    this.current_mod_postprocess = null;

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
  }

  /**
   * 初期化処理（union.jsのロードが必要）
   * Maginaiのインスタンス作成だけであればunion.jsは不要
   * @private
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

    // Modのロード前にゲームがロードされるのを防ぐためtGameMainクラスをダミーに置き換える
    // （tGameMainのnew≒ゲームの諸々の初期化）
    // このためModからtGameMainクラスにアクセスする場合はmaginai.origtGameMainを参照する必要がある
    this.origtGameMain = tGameMain;
    tGameMain = function (...args) {
      if (tWgm === null) {
        logger.debug(`tWgm is not loaded yet`);
        return {};
      } else {
        throw new Error(
          'ゲームのロードが先に行われたためModのロードに失敗しました。'
        );
      }
    };
  }

  /**
   * ゲームをロードする
   * @private
   */
  loadtWgm() {
    tWgm = new this.origtGameMain({});
    this.ontWgmLoaded({});
  }

  /**
   * ゲームのロード直後処理
   * @param {object} e
   * @private
   */
  ontWgmLoaded(e) {
    // tWgmLoadイベント発生
    this.events.tWgmLoad.invoke(e);
    // C#スタイルで、イベントを呼ぶべき処理自体をメソッドに抜き出し（継承のため）しているが不要かも
  }

  /**
   * JavaScriptファイルをロード
   * DOM操作でscriptタグによりロードし、ロードしたscript要素を含むオブジェクトにfullfilledされる`Promise`を返す
   * @param {string} path
   * @return {Promise<{script:HTMLScriptElement}, Error>} promise
   */
  loadJs(path) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
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
   * JavaScriptファイルから`var LOADDATA=...`で定義されたデータをロードする
   * ほぼunion.jsの`loadJsData`のvendorize
   * @param {string} path
   * @returns {any} ロードされたデータ
   */
  loadJsData(path) {
    const promise = this.loadJs(path).then((e) => {
      e.script.parentNode.removeChild(e.script);
      const loaded = LOADDATA;
      LOADDATA = undefined;
      return loaded;
    });
    return promise;
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
    this.current_mod_postprocess = Promise.resolve(promise);
  }

  /**
   * ModのJavaScriptロード後に実行されるPromiseをpopする
   * 事前にsetされていなくてもPromise.resolve()を返し、エラーにならない
   * @private
   * @return {Promise<any>} setされていたPromise
   */
  popModPostprocess() {
    const rtn = this.current_mod_postprocess ?? Promise.resolve();
    this.current_mod_postprocess = undefined;
    return rtn;
  }

  /**
   * 1Modのロード処理Promiseの生成
   * 1Modのロード処理は
   * 独自エラーハンドラのset→Mod JavaScriptのロード→Postprocessの実行→独自エラーハンドラをunset
   * となる
   * 独自エラーハンドラによりどのModからエラーが発生したかの識別と集計が可能
   * 集計はerrorsOnLoadModsに集められる
   * またエラーは外に伝搬しないため、個別のModのエラーは他のModやメイン処理に影響しない
   * ＝一部がエラーでもほかは問題なく終了できる
   * @param {string} modName
   * @return {Promise<any>} promise
   * @private
   */
  getModLoadPromise(modName) {
    const onError = (e) => {
      logger.error('Error during mod loading:', modName, e.error ?? e);
      this.errorsOnLoadMods.push([e, modName]);
    };
    const abortController = new AbortController();
    const promise = Promise.resolve()
      .then(() => {
        //EventListener for collect errors on mod loading
        window.addEventListener('error', onError, {
          signal: abortController.signal,
        });
      })
      .then(() => this.loadJs(`./js/mod/mods/${modName}/init.js`))
      .then(() => this.popModPostprocess())
      .catch((e) => {
        this.popModPostprocess(); // Ensure the postprocess is not remained
        onError(e);
        // logger.error("Error on loading mod", modName, e);
      })
      .finally(() => {
        logger.info(`Mod loaded: ${modName}`);
        abortController.abort();
        // window.removeEventListener("error", onError);
      });
    return promise;
  }

  /**
   * ロード処理 - すべてのModのロードからゲームロード終了まで
   * mods_load.jsのmodsから読み込み順と対象modNameを取得
   * 各modNameで1modのロード処理（getModLoadPromise参照）を生成し連結
   * その後はloadtWgmでゲームロード開始
   * @private
   */
  loadMods() {
    const rtnPromise = this.loadJsData('./js/mod/mods/mods_load.js')
      .then((loaded) => {
        let promise = Promise.resolve();
        for (const modName of loaded['mods']) {
          promise = promise.then(() => this.getModLoadPromise(modName));
        }
        return promise;
      })
      .then(() => {
        logger.info('Completed loading all mods. Starting the game...');
        this.loadtWgm();
        this.isModLoadFatalErrorOccured = false;
      })
      .catch((e) => {
        // 各Modでのエラーはそれぞれで処理済のため、ここでcatchされるのはfatal errorのはず
        // （必要なファイルが存在しない、mod_load.jsの構造がおかしい…etc）
        logger.error('Mod load failed:', e);
        throw e;
      });

    return rtnPromise;
  }
}

const maginai = new Maginai();

export default maginai;
