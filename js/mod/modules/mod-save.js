import { Patcher } from './patcher.js';
import { ModEvent } from './event/mod-event.js';

export const MAGINAI_SAVE_KEY = 'maginai';
/**
 * `maginai.modSave`サブモジュールクラス
 * 直接インスタンス化せず`maginai.modSave`から使用してください
 *
 * `setSaveObject(name, obj)`でキー`name`に対応するセーブオブジェクトとして、`obj`をセットする
 * 次にセーブ処理が行われるときにそのオブジェクトがセーブデータに保存される
 *
 * `getSaveObject(name)`で現在読み込まれているセーブデータの、キーが`name`のセーブオブジェクトを取得する
 *
 * `removeSaveObject(name)`でキー`name`のセーブオブジェクトを削除する
 *
 * いずれもタイトル画面などでセーブデータが読み込まれていない場合には例外を発生させる
 *
 * maginaiイベントの`saveLoaded`はセーブ読み込み直後、`saveObjectRequired`はセーブデータ書き込み直前のイベントのため
 * `getSaveObject`・`setSaveObject`はそれらのイベント内での使用を推奨
 * （それ以外のタイミングで随時使用することも可能）
 *
 * 使用例：
 * ```typescript
 * // セーブ回数をカウントするmod init.js
 * (function () {
 *   let saveCount;
 *   const logger = maginai.logging.getLogger('sample4');
 *   // タイプ数削減のためサブモジュールを変数に格納
 *   const sv = maginai.modSave;
 *   const ev = maginai.events;
 *
 *   // セーブデータのロード完了時に…
 *   ev.saveLoaded.addHandler(() => {
 *     // getSaveObjectで現在読み込んでいるセーブデータ内の`sample4`のセーブオブジェクトを取得
 *     const saveObj = sv.getSaveObject('sample4');
 *     if (saveObj === undefined) {
 *       // `sample4`のセーブオブジェクトが存在しない場合undefinedが返されるので、saveCountの初期値0をセット
 *       saveCount = 0;
 *     } else {
 *       // セーブオブジェクトが存在すればその中のsaveCountをセット
 *       saveCount = saveObj.saveCount;
 *     }
 *     // ログにセーブから読み込んだsaveCountを表示
 *     logger.info(
 *       `セーブオブジェクトがロードされました。saveCount:` + saveCount.toString()
 *     );
 *   });
 *
 *   // セーブデータ書き込み直前に…
 *   ev.saveObjectRequired.addHandler(() => {
 *     // saveCountを+1
 *     saveCount += 1;
 *
 *     // `sample4`のセーブオブジェクトとして、オブジェクトにsaveCountを含めてセット
 *     sv.setSaveObject('sample4', { saveCount });
 *     logger.info(`セーブがセットされました`);
 *   });
 * })();
 * ```
 *
 * 注意：
 * - どのmodからでも同じnameで同じセーブオブジェクトへアクセスできるため、nameには衝突しない一意の名前が必要（基本的にはmod名をnameに指定することを推奨）
 * - セーブオブジェクトはセーブデータへ書き込まれる過程で`JSON.stringify`処理されるため、JSON化不可能なメソッドなどのオブジェクトは削除される
 * - ゲームのブラウザ版で保存可能なセーブ容量は2つのセーブ合わせて5MB程度までのため、セーブデータが大きくなりすぎるとセーブ不可となることがある
 *   - 参考：`tWgm.isL`を`true`にしてプレイすることでセーブ時にセーブのサイズがコンソールログ出力される
 *
 */
export class ModSave {
  constructor() {
    /**
     * @private
     * UnzipWorkerの結果保存用（詳細はinit()へ）
     * @type {object | null}
     */
    this.previousUnzipWorkerResult = null;

    /**
     * @private
     * ルートセーブオブジェクト
     * 各nameのセーブオブジェクトはrootSaveObject[name]に格納される
     * @type {object}
     */
    this.rootSaveObject = {};

    /**
     * セーブデータが利用可能かどうか
     */
    this.isSaveAvailable = false;

    /**
     * @internal
     * セーブオブジェクトの収集時イベント
     */
    this.saveObjectRequired = new ModEvent('saveObjectRequired');
  }

  init() {
    const patcher = new Patcher();
    const self = this;
    // tGameSave.unzipDataWorkerにパッチして、unzipした結果のデータを_previousUnzipWorkerResultにストアする
    // 結果はcallbackの引数に渡されるので、callbackを新しいものに差し替えてその中で結果を取得、ストアする
    // ※直接ロードされたセーブデータにアクセスできるメソッドへのパッチができないため、ここでUnzipの前結果を保存しておき
    // このあとtGameCharactorのsetSaveが呼ばれたらそのときUnzipの前結果==セーブデータオブジェクトとして扱う、という二段構えにしている
    patcher.patchMethod(tGameSave, 'unzipDataWorker', (origMethod) => {
      const rtnFn = function (a, callback, ...args) {
        const newCallback = (result, ...cbArgs) => {
          self.previousUnzipWorkerResult = result;
          const cbRtn = callback(result, ...cbArgs);
          return cbRtn;
        };
        return origMethod.call(this, a, newCallback, ...args);
      };
      return rtnFn;
    });

    // tGameMap.setSaveに"相乗り"してMod用セーブデータを取得するためパッチ
    // 二段構え構成でMod用セーブデータの取得を実現している(詳細は上記)
    // セーブデータ取得後、利用可能フラグをtrueにする
    patcher.patchMethod(tGameMap, 'setSaveData', (origMethod) => {
      const rtnFn = function (...args) {
        if (self.previousUnzipWorkerResult !== null) {
          // このsetSaveが呼ばれたときの_previousUnzipWorkerResultがunzipされて展開済のセーブデータオブジェクトなので MAGINAI_SAVE_KEYのプロパティにアクセス
          const maginaiSaveObject =
            self.previousUnzipWorkerResult[MAGINAI_SAVE_KEY];
          // もし存在すれば取得、存在しなければ空のオブジェクトを現在読み込んでいるMod用セーブとする
          if (maginaiSaveObject !== undefined) {
            self.rootSaveObject = maginaiSaveObject;
          } else {
            self.rootSaveObject = {};
          }
          self.isSaveAvailable = true;
          self.previousUnzipWorkerResult = null;
        }
        return origMethod.call(this, ...args);
      };
      return rtnFn;
    });

    // tGameMap.initSaveDataにパッチし、ゲームを最初から始めたときに
    // Mod用セーブデータに空のオブジェクトをセットし、セーブ利用可能フラグをtrueにする
    patcher.patchMethod(tGameMap, 'initSaveData', (origMethod) => {
      const rtnFn = function (...args) {
        self.isSaveAvailable = true;
        self.rootSaveObject = {};
        origMethod.call(this, ...args);
      };
      return rtnFn;
    });

    // tGameSave.getSaveDataにパッチし、Mod用セーブオブジェクトをルートのセーブオブジェクトにセットする
    // getSaveDataではルートのセーブオブジェクトの作成とtWgm.tGameSave等からのセーブオブジェクトの収集をしているので
    // 返り値のルートセーブオブジェクトにMod用セーブオブジェクトをセットすればOK
    patcher.patchMethod(tGameSave, 'getSaveData', (origMethod) => {
      const rtnFn = function (...args) {
        // もとのメソッドで作成されたルートセーブオブジェクトを取得
        const saveObject = origMethod.call(this, ...args);
        // セットの前に、イベントを発行し各Modのセーブオブジェクトをセットするよう伝達
        self.saveObjectRequired.invoke({});
        // セット
        saveObject[MAGINAI_SAVE_KEY] = self.rootSaveObject;
        return saveObject;
      };

      return rtnFn;
    });

    // tGameTitle.viewTitleにパッチし、タイトルに戻ったときにセーブ利用可フラグをfalseにする
    patcher.patchMethod(tGameTitle, 'viewTitle', (origMethod) => {
      const rtnFn = function (...args) {
        self.isSaveAvailable = false;
        return origMethod.call(this, ...args);
      };

      return rtnFn;
    });
  }

  /**
   * 指定されたnameのMod用セーブオブジェクトを取得します。
   * 読み込まれているセーブにこのnameのセーブオブジェクトが存在しない場合はundefinedが返ります。
   * @type {string} name
   */
  getSaveObject(name) {
    if (!this.isSaveAvailable)
      throw new Error('セーブデータが読み込まれていません');
    return this.rootSaveObject[name];
  }

  /**
   * 指定されたnameのMod用セーブオブジェクトをセットします。
   * 注意：実際にセーブデータに書き込まれるのはセーブ操作が行われたとき（メニュー＞セーブする等）です
   * @type {string} name
   * @type {object} saveObj
   */
  setSaveObject(name, saveObj) {
    if (!this.isSaveAvailable)
      throw new Error('セーブデータが読み込まれていません');
    if (saveObj === undefined) {
      throw new Error(
        'セーブオブジェクトとしてundefinedをセットすることはできません。removeSaveObjectを使用してください'
      );
    }
    this.rootSaveObject[name] = saveObj;
  }

  /**
   * 指定されたnameのMod用セーブオブジェクトを削除します。
   * 注意：実際にセーブデータに書き込まれるのはセーブ操作が行われたとき（メニュー＞セーブする等）です
   * @type {string} name
   */
  removeSaveObject(name) {
    if (!this.isSaveAvailable)
      throw new Error('セーブデータが読み込まれていません');
    delete this.rootSaveObject[name];
  }
}
