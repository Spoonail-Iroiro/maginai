import logging from 'loglevel';
import { Patcher } from '../patcher.js';
import { CancelableModEvent } from '../event/cancelable-mod-event.js';

const pt = new Patcher();
const logger = logging.getLogger('maginai.control');

export const MOD_COMMAND_KEY_CODES = [
  'f1', //
  'f2',
  'f3',
  'f4',
];

/**
 * @internal
 */
export class ModCommandKey {
  constructor() {
    this.commandKeyClicked = new CancelableModEvent('commandKeyClicked');
    this.isViewAbilityBlocked = false;
  }

  /**
   * @private
   */
  blockViewAbilityOnce() {
    this.isViewAbilityBlocked = true;
  }

  /**
   * @private
   */
  patchViewSkill() {
    const self = this;
    pt.patchMethod(tGameMenu, 'viewSkill', (origMethod) => {
      const rtnFn = function (...args) {
        if (self.isViewAbilityBlocked) {
          self.isViewAbilityBlocked = false;
          return;
        }

        return origMethod.call(this, ...args);
      };
      return rtnFn;
    });
  }

  /**
   * @private
   */
  patchIsClick() {
    const self = this;
    // ハンドラーに渡されるend関数（キーイベントハンドルの終了）
    // 引数から取り出して使用してもいいようbind済にしておく
    const end = this.endKeyHandle.bind(this);
    pt.patchMethod(tGameKeyboard, 'isClick', (origMethod) => {
      const rtnFn = function (origKeyCode, ...rest) {
        if (origKeyCode === 'command_ability') {
          for (const keyCode of MOD_COMMAND_KEY_CODES) {
            const clicked = origMethod.call(this, keyCode, ...rest);
            if (clicked) {
              logger.debug(`${keyCode} clicked`);
              const handled = self.commandKeyClicked.invoke({
                keyCode,
                end,
              });
              if (handled) {
                // 本来のviewAbilityを一度だけ（この後の呼び出しだけ）ブロックする
                self.blockViewAbilityOnce();
                return true;
              }
            }
          }
        }
        // 追加キーで処理が終わらないか、相乗りするコマンドでなければ元のメソッドの結果を返す
        return origMethod.call(this, origKeyCode, ...rest);
      };
      return rtnFn;
    });
  }

  /**
   * @internal
   * Initialization
   *
   * Patches methods to enable the mod command keys
   */
  init() {
    this.patchIsClick();
    this.patchViewSkill();
  }

  /**
   * @internal
   * `end` function passed to handlers
   */
  endKeyHandle() {
    const grm = tWgm.tGameRoutineMap;
    grm.setFrameAction(tWgm);
    grm.player.isDash = false;
    grm.isAction = false;
  }
}
