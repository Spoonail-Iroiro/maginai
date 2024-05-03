import { Patcher } from './patcher.js';
/**
 * Class to enable launch CoAW from `index.html` in Steam ver.
 *
 */
export class MaginaiBrowserUnlocker {
  constructor() {
    this.isFirstInitFirstLogCalled = false;
    this.isFirstGetGameTypeCalledAfterFirstInitFirstLog = false;
  }

  /**
   * Initialize with patching methods in the game
   * In CoAW, if tGameWindows.getGameType returns 'steam' and !tGameWindows.isEnabled, tGameMain doesn't start loading.
   * This init() makes tGameMain.getGameType returns '' if all of the following conditions are met:
   * - It's called for the first time after the first call of tGameMain.initFirstLog.
   * - The game is Steam version (tGameMain.getGameType() == 'steam')
   */
  init() {
    const patcher = new Patcher();
    const self = this;

    patcher.patchMethod(tGameMain, 'initFirstLog', (origMethod) => {
      const rtnFn = function (...args) {
        self.isFirstInitFirstLogCalled = true;
        return origMethod.call(this, ...args);
      };
      return rtnFn;
    });

    patcher.patchMethod(tGameMain, 'getGameType', (origMethod) => {
      const rtnFn = function (...args) {
        const rtn = origMethod.call(this, ...args);
        if (
          rtn == 'steam' &&
          self.isFirstInitFirstLogCalled &&
          !self.isFirstGetGameTypeCalledAfterFirstInitFirstLog
        ) {
          self.isFirstGetGameTypeCalledAfterFirstInitFirstLog = true;
          // Don't return 'steam' only once
          return '';
        }

        return rtn;
      };
      return rtnFn;
    });
  }
}
