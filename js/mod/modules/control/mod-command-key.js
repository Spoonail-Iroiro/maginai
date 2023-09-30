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

export class ModCommandKey {
  constructor() {
    this.commandKeyClick = new CancelableModEvent('commandKeyClick');
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

  // /**
  //  * 追加キーのclickイベントハンドラの登録
  //  * @param {string} keyCode
  //  * @param {(end: () => void, ) =>void} fn ハンドラー
  //  *    処理の終わりに必ず第一引数のend()関数を呼ぶべき（呼ばない場合フリーズ）
  //  */
  // addHandler(keyCode, fn) {
  //   const keyList = ['f1', 'f2', 'f3', 'f4'];
  //   if (!keyList.includes(keyCode)) {
  //     throw new Error(`キーは次のうちの1つである必要があります: [${keyList}]`);
  //   }
  //   this.handlers[keyCode] = fn;
  // }

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
              const handled = self.commandKeyClick.invoke({
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
   * パッチを実行しModコマンドキーイベントを有効化する
   */
  init() {
    this.patchIsClick();
    this.patchViewSkill();
  }

  /**
   * イベントハンドラーが処理終了時に呼ぶ必要があるメソッド
   * ゲームの一時停止を解除する
   */
  endKeyHandle() {
    const grm = tWgm.tGameRoutineMap;
    grm.setFrameAction(tWgm);
    grm.player.isDash = false;
    grm.isAction = false;
  }
}
