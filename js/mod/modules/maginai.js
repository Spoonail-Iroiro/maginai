import logging from 'loglevel';
import { Patcher } from './patcher.js';
import { Patcher2 } from './patcher2.js';
import { ModEvent } from './event/mod-event.js';
import { version as VERSION } from './version.js';
import * as maginaiImage from './maginai-images';
import { ModSave } from './mod-save.js';
import {
  ModCommandKey,
  MOD_COMMAND_KEY_CODES,
} from './control/mod-command-key.js';
import { versionToversionInfo } from './util.js';

const logger = logging.getLogger('maginai');

/**
 * @internal
 * Canvas control class for showing information about maginai (e.g. labels on title screen)
 */
class MaginaiImage {
  constructor() {
    /**
     * @internal
     */
    this.cvs = new OffscreenCanvas(500, 1000);
    /**
     * @internal
     * @type {OffscreenCanvasRenderingContext2D}
     */
    this.ctx = this.cvs.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
  }

  /**
   * @private
   * Creates and returns a canvas, context, and rect to display maginai information on the screen
   *
   * @param {string[]} completedMods
   * @param {boolean} isMainFailed
   * @param {[(Error|ErrorEvent), string][]} failedMods
   * @return {maginaiTypes.DrawInfoRect} drawInfo
   */
  getImageInfo(completedMods, isMainFailed, failedMods) {
    const gm = tWgm;
    let maxWidthOfCanvas = 0;
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
    if (maxWidthOfCanvas < mainInfo.width) maxWidthOfCanvas = mainInfo.width;
    maginaiImage.pasteTLWH(this.ctx, mainInfo, 0, height);
    height += mainInfo.height;

    for (const name of completedMods) {
      const loadedInfo = gm.tGameText.createText({
        text: `%c[saveimport]'${name}' loaded`,
        maxWidth: 500,
        fontSize: 13,
        lineHeight: 0.2,
        strokeData: {
          color: 'rgba(0,0,0,0.5)',
          width: 4,
        },
      });
      if (maxWidthOfCanvas < loadedInfo.width) {
        maxWidthOfCanvas = loadedInfo.width;
      }

      maginaiImage.pasteTLWH(this.ctx, loadedInfo, 0, height);
      height += loadedInfo.height;
    }

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
      maginaiImage.pasteTLWH(this.ctx, modsInfo, 0, height);
      height += modsInfo.height;
      if (maxWidthOfCanvas < modsInfo.width) {
        maxWidthOfCanvas = modsInfo.width;
      }
    }

    return {
      cvs: this.cvs,
      ctx: this.ctx,
      rect: [0, 0, maxWidthOfCanvas, height],
    };
  }

  /**
   * Draws maginai information on the targetLayer
   *
   * @param {object} targetLayer
   * @param {string[]} completedMods
   * @param {boolean} isMainFailed
   * @param {[(Error|ErrorEvent), string][]} failedMods
   */
  draw(targetLayer, completedMods, isMainFailed, failedMods) {
    const info = this.getImageInfo(completedMods, isMainFailed, failedMods);
    const dx = 5;
    // To avoid overlapping with the `Reset Options` button, place the image slightlyabove the bottom-left corner
    const dy = targetLayer.cvs.height - info.rect[3] - 50;
    const drawRect = [dx, dy, info.rect[2], info.rect[3]];
    // targetLayer.ctx.clearRect(...drawRect);
    maginaiImage.pasteRect(targetLayer.ctx, info, drawRect[0], drawRect[1]);
  }
}

/**
 * `maginai.events` submodule class
 *
 * Defines various events of `maginai`.
 * Do not instantiate directly; use from `maginai.events`.
 *
 * You can call `addHandler` in your mod to register handler(s) for the events.
 * Example:
 * ```js
 * const ev = maginai.events;
 * ev.gameLoadFinished.addHandler(() => {
 *   console.log("Load finished")
 * });
 * ```
 */
export class MaginaiEvents {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Triggered when tGameMain is instantiated and set to tWgm.
   *
   * \* Game data might not have been fully loaded yet
   *
   * callback type: `({}) => void`
   */
  tWgmLoaded = new ModEvent('tWgmLoad');

  /**
   * @deprecated old name of `tWgmLoaded`
   */
  tWgmLoad = this.tWgmLoaded;

  /**
   * Triggered just before the original update process of the game.
   *
   * callback type: `({frame: number}) => void`
   *   `frame` frames elapsed since the last update
   */
  beforeRefresh = new ModEvent('beforeRefresh');

  /**
   * Triggered just after the original update process of the game.
   *
   * callback type: `({frame: number}) => void`
   *   `frame` frames elapsed since the last update
   */
  afterRefresh = new ModEvent('afterRefresh');

  /**
   * Triggered when game data loading is finished, just before the title screen displays.
   *
   * callback type: `({}) => void`
   */
  gameLoadFinished = new ModEvent('gameLoadFinished');

  /**
   * Triggered after a save slot is selected by the player and before all game objects (such as `tWgm.tGameCharactor`) load data from the save.
   *
   * Each mod's save object is available in the handler.
   * This is a good place to retrieve values from the mod's save object through `maginai.modSave.getSaveObject` and initialize objects or variables that work with each save.
   *
   * This event is also triggered at the start of new game, just before save objects of all game objects are initialized.
   *
   * `isNewGame` in the event arg is whether it's triggerd for the new game.
   *
   * callback type: `({isNewGame: boolean}) => void`
   */
  saveLoading;

  /**
   * Triggered when the save data loading is completed and just before it becomes operable when the player selected a save slot to continue the game.
   *
   * This event is also triggered at the start of new game, when the Place of Beginning is displayed.
   *
   * `isNewGame` in the event arg is whether it's triggerd for the new game.
   *
   * callback type: `({isNewGame: boolean}) => void`
   */
  saveLoaded = new ModEvent('saveLoaded');

  /**
   * Triggered when one of the mod command keys is clicked.
   *
   * See `maginai.MOD_COMMAND_KEY_CODES` for the list of the mod command keys.
   *
   * The handler must return `true` if it processed the `keyCode`.
   * Since the default updates and key reception are stopped until `end` in the arg is called,
   * `end` must be called at the end of the handler process in most cases.
   * (An exception to the "most cases" is returning to the title screen, where the default updates are no longer necessary)
   *
   * callback type: `({keyCode: string, end: ()=>void}) => boolean`
   * - `keyCode` The key code of the clicked key
   * - `end` Function to return to the default state
   *
   * ```js
   * maginai.events.commandKeyClicked.addHandler((e) => {
   *   // This handler handles clicking the `F1` key
   *   if (e.keyCode === 'f1') {
   *     console.log('F1 key clicked')
   *     // You should call `end` at the end to allow default key input and updates again
   *     e.end();
   *     // `end` is called synchronously here as the process completes immediately,
   *     // but if asynchronous processing such as opening a window is performed,
   *     // you should call `end` when the process ends, such as in the completion callback of the window.
   *
   *     // Return true because this handler has processed the key `keyCode`.
   *     // By this, subsequent key processing will not occur.
   *     // *If `true` is not returned, it may conflict with other key handlers and result in unexpected results
   *     return true;
   *   }
   *   // Pass through if keys other than `F1` are clicked (do not return true, do not call `end`)
   * });
   * ```
   *
   * @type {import('./event/cancelable-mod-event.js').CancelableModEvent}
   */
  commandKeyClicked; // Exposed from the field of `ModCommandKey`, so not set here

  /**
   * Triggered just before saving, when a save object to be written to the save data is requested.
   *
   * Each mod can set the save object using `maginai.modSave.setSaveObject` in the event handler to write its data to the save.
   * the `maginai.modSave.setSaveObject` itself is effective at other times as well, but this event allows you to prepare your mod's save data just before saving
   * For details, refer to the `ModSave` class documentation
   *
   * @type {ModEvent}
   */
  saveObjectRequired; // Exposed from `taginai.modSave`, so not set here
}

/**
 * `maginai` main module class
 *
 * All mods can access the `maginai` global variable, which is an instance of this class.
 * You can use various `maginai` features through its fields and methods.
 * Some properties, such as `maginai.logging`, are submodules that provide specific functions under them.
 *
 * Submodules and their features:
 * - {@link Maginai.logging | logging} - Console logging
 * - {@link Maginai.patcher2 | patcher2} - Patching methods
 * - {@link Maginai.events | events} - Events
 * - {@link Maginai.modSave | modSave} - Save data for each mod
 */
export class Maginai {
  /**
   * @internal
   */
  constructor() {
    /**
     * Version string
     *
     * @type {string}
     */
    this.VERSION = VERSION;

    /**
     * Version information
     *
     * Represents [major, minor, patch, preid, prerelease] parts of the version string.
     * If the version is not prelease, (preid, prerelease) === (null, null)
     *
     * @type {[number, number, number, string | null, number | null]}
     */
    this.VERSION_INFO = versionToversionInfo(VERSION);

    /**
     * @internal
     * JavaScript file paths loaded by `loadJs`
     *
     * @type {Record<string,boolean>}
     */
    this.loadedJs = {};

    /**
     * @internal
     * Whether `gameLoadFinished` is already triggered
     *
     * For controlling the event
     */
    this.isGameLoadFinished = false;

    /**
     * @internal
     * To initialize `tWgm` only once, we should do it on the earlier of $(document).ready or main postprocess.
     * This field is for controlling it.
     */
    this.isFirstDummytWgmMainLoadFinished = false;

    /**
     * Actual `tGameMain`
     *
     * `maginai` replace `tGameMain` with a dummy class, so mods can't access actual `tGameMain` directly.
     * Use this `origtGameMain` property to access it.
     *
     * @type {any}
     */
    this.origtGameMain = null;

    /**
     * @internal
     * Successfully loaded mods
     *
     * @type {string[]}
     */
    this.completedMods = [];

    /**
     * @internal
     * List of `(<error>, <mod's name>)` during mod loading
     *
     * @type {[(Error|ErrorEvent), string][]}
     */
    this.errorsOnLoadMods = [];

    /**
     * @internal
     * Indicates whether an error occured during the main process of loading mods.
     * (Ignores errors during the loading of each mod)
     * Initially `true`; set to `false` on success.
     * Used for displaying the loading status on the title screen
     */
    this.isModLoadFatalErrorOccured = true;

    /**
     * @internal
     * Instance of canvas control class for displaying information on title screens, etc.
     *
     * @type {MaginaiImage?}
     */
    this.image = null;

    /**
     * @internal
     * Queue for `logToInGameLogDebug`
     *
     * @type {string[]}
     */
    this.inGameDebugLogQueue = [];

    /**
     * @internal
     * Current postprocess of the loading mod
     *
     * Cycle of executing Postprocess:
     * 1. `maginai` starts loading a mod
     * 2. The mod sets their Postprocess in `init.js` using `maginai.setModPostprocess`
     * 3. `maginai` pops the PostProcess using `popModPostprocess` and executes it
     * 4. `maginai` proceeds to load the next mod
     *
     * @type {Promise<any> | null}
     */
    this.currentModPostprocess = null;

    /**
     * @internal
     * Instance of `ModCommandKey` for setting mod command key
     */
    this.modCommandKey = new ModCommandKey();

    /**
     * Key codes available for the mod command key
     */
    this.MOD_COMMAND_KEY_CODES = MOD_COMMAND_KEY_CODES;

    // Submodules

    /**
     * `maginai.patcher` submodule
     *
     * Provides utility methods for method patching
     * See {@link Patcher} class definition for details.
     */
    this.patcher = new Patcher();

    /**
     * `maginai.patcher2` submodule
     *
     * Provides utility methods for method patching.
     * See {@link Patcher2} class definition for details.
     */
    this.patcher2 = new Patcher2();

    /**
     * `maginai.logging` submodule (=== `loglevel` module of the [loglevel package](https://www.npmjs.com/package/loglevel))
     *
     * It's recommended to use this for logging in each mod.
     *
     * ```js
     * const logger = maginai.logging.getLogger("my-mod") // Pass your mod's name to `getLogger`
     * // Available log levels are trace/debug/info/warn/error
     * logger.info('info level log')
     * logger.debug('debug level log')
     * ```
     */
    this.logging = logging;

    /**
     * `maginai.modSave` submodule
     *
     * Provides methods for getting and setting the save data for each mod.
     * See {@link ModSave} class definition for details.
     */
    this.modSave = new ModSave();

    /**
     * `maginai.events` submodule
     *
     * Provides the events of `maginai`.
     * See {@link MaginaiEvents} for details.
     */
    this.events = new MaginaiEvents();
    this.events.commandKeyClicked = this.modCommandKey.commandKeyClicked;
    this.events.saveObjectRequired = this.modSave.saveObjectRequired;
    this.events.saveLoading = this.modSave.saveLoading;
  }

  /**
   * @internal
   * Initialization which requires `union.js` loaded
   *
   * \* Note: just instantiating `Maginai` doesn't require `union.js`.
   */
  init() {
    logger.info(`Mod loader 'maginai' v${VERSION}`);

    // Name shortcuts and control 'this' bind
    this.image = new MaginaiImage();
    const magi = this;
    const ev = this.events;

    // Patches `viewTitle`, to make `gameLoadFinished` triggered when the title screen is displayed
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

    // Patches `loadAct` to make `saveLoaded` triggered when the save is loaded
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

    // When you start new game, `loadAct` won't be called.
    // Therefore, we make `saveLoaded` triggered after the call of the callback passed to `tGameOpening.view`
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

    // Patches `setCallBack` to make `beforeRefresh` and `afterRefresh` triggered before and after the original callback
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

    // Patches `drawBackground_title` to draw mod's informatioon on the title screen
    this.patcher.patchMethod(
      tGameTitle,
      'drawBackground_title',
      (origMethod) => {
        // Creates a new CB, which perform drawing before the original CB, and pass it to the original `drawBackground_title`
        // newMethod is...
        const rtnFn = function (callback, ...args) {
          // Inject drawing labels for maginai, before passed callback called
          const newCB = (isOk, ...cbArgs) => {
            if (isOk) {
              magi.image.draw(
                tWgm.screen.layers.ground,
                magi.completedMods,
                magi.isModLoadFatalErrorOccured,
                magi.errorsOnLoadMods
              );
            }
            callback(isOk, ...cbArgs);
          };
          // Call origMethod with new callback and return through
          const rtn = origMethod.call(this, newCB, ...args);
          return rtn;
        };
        return rtnFn;
      }
    );

    // Patches `addAndViewLog` to log to the in-game log by `logToInGameLogDebug`
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
    // Replaces `tGameMain` with a dummy class to prevent the game from loading before mods are loaded.
    // (Note: Instantiating `tGameMain` triggers instantiation and initialization of all game classes.)
    // Mods should use `maginai.origtGameMain` instead of `tGameMain` to access the actual `tGameMain`.
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

    // Patches for the mod command keys
    this.modCommandKey.init();

    // Patches for the mod save
    this.modSave.init();
  }

  /**
   * @internal
   * Loads the game
   *
   * @return {any} new tGameMain({})
   */
  loadtWgm() {
    tWgm = new this.origtGameMain({});
    this.ontWgmLoaded({});
    return tWgm;
  }

  /**
   * @internal
   * Triggers `tWgmLoaded`
   *
   * @param {object} e
   */
  ontWgmLoaded(e) {
    // tWgmLoadイベント発生
    this.events.tWgmLoaded.invoke(e);
    // C#スタイルで、イベントを呼ぶべき処理自体をメソッドに抜き出し（継承のため）しているが不要かも
  }

  /**
   * Loads a JavaScript file.
   *
   * Loads the file by adding a `script` tag via DOM operation and returns an object containing the `HTMLScriptElement` of the loaded script.
   *
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
   * Loads an object from `var LOADDATA=...` style JavaScript file
   *
   * @param {string} path
   * @returns {Promise<any>} object loaded
   */
  async loadJsData(path) {
    const e = await this.loadJs(path);
    e.script.parentNode.removeChild(e.script);
    const loaded = LOADDATA;
    LOADDATA = undefined;
    return loaded;
  }

  /**
   * Logs to the in-game log (for debugging)
   *
   * This method logs the passed `message` to the in-game log by "piggybacking" on the original logging process.
   * You can call it from anywhere, and the `message` will be logged at the next logging reliably.
   * However, due to the nature of this process, you cannot control exactly when the `message` will be logged, and there may be delays in logging.
   * Use this method strictly for debugging purposes.
   * For actual logging tasks, such as displaying used items, it's recommended to use the game's `addAndViewLog` method of the game.
   *
   * @param {string} message
   */
  logToInGameLogDebug(message) {
    // option is not used currently
    this.inGameDebugLogQueue.push(message);
  }

  /**
   * Sets Postprocess `Promise`
   *
   * This should be called in `init.js`.
   * The set Postprocess will be executed after loading the mod.
   * Note: this method accepts any non-`Promise` value and converts it to a `Promise` using `Promise.resolve()`.
   *
   * @param {Promise<any>} promise - Postprocess
   */
  setModPostprocess(promise) {
    this.currentModPostprocess = Promise.resolve(promise);
  }

  /**
   * @private
   * Pops Postprocess `Promise`
   *
   * Note: this method returns `Promise.resolve()` even if no Postprocess has been set.
   * @return {Promise<any>} Postprocess
   */
  popModPostprocess() {
    const rtn = this.currentModPostprocess ?? Promise.resolve();
    this.currentModPostprocess = undefined;
    return rtn;
  }

  /**
   * @private
   * Loads a mod
   *
   * 1. Sets a custom error handler for catching errors during loading the mod
   * 2. Loads `init.js`
   * 3. Pops the Postprocess of the mod and execute it
   * 4. Unsets the error handler
   *
   * By the custom error handler, we can identify and aggregate errors from each mod.
   * The errors are collected in `errorsOnLoadMods`.
   * Exceptions during loading the mod are caught to prevent failure from affecting other mods or the main process.
   *
   * @param {string} modName
   */
  async loadOneMod(modName) {
    // Will be diffed with failed mods later, so pushing all here
    this.completedMods.push(modName);
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
   * Loads all mods and the game
   *
   * Retrieves all mod's names from `mods_load.js` and loads all mods.
   * After that, loads the game with `loadtWgm`
   */
  async loadMods() {
    const postProcessLogger = this.logging.getLogger('maginai.postprocess');
    try {
      const loaded = await this.loadJsData('./js/mod/mods/mods_load.js');

      for (const modName of loaded['mods']) {
        await this.loadOneMod(modName);
      }

      const failedModNames = this.errorsOnLoadMods.map(([_, name]) => name);
      this.completedMods = this.completedMods.filter(
        (name) => !failedModNames.includes(name)
      );

      logger.info('Completed loading all mods. Starting the game...');

      if (!this.isFirstDummytWgmMainLoadFinished) {
        postProcessLogger.debug('First dummy tWgm load. Doing nothing');
        this.isFirstDummytWgmMainLoadFinished = true;
      } else {
        postProcessLogger.debug('Second true tWgm load');
        this.loadtWgm();
      }
      // It may set to `true` on the ready
      this.isModLoadFatalErrorOccured = false;
    } catch (e) {
      // Errors from the mods are already caught, so only fatal errors rech here
      // (e.g. missing necessary files, invalid `mods_load.js`, etc.)
      logger.error('Mod load main proccess failed:', e);
      throw e;
    }
  }
}
