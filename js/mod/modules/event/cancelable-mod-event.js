import { ModEvent } from './mod-event.js';
import logging from 'loglevel';

const logger = logging.getLogger('maginai.event');

/**
 * キーイベントクラス
 *
 * このイベントのあるハンドラーがtrueを返した時
 * それ以降の他のハンドラーを実行しない
 */
export class CancelableModEvent extends ModEvent {
  /**
   * @internal
   * @param {string} name イベント名
   * @param {string} description 説明
   */
  constructor(name, description = 'KeyEvent') {
    super(name, description);
  }

  /**
   * @internal
   * イベントの発火
   * @param {object} e イベントオブジェクト
   * @returns {boolean} handled イベントを処理したハンドラーが存在したかどうか
   */
  invoke(e) {
    for (const handler of this.handlers) {
      try {
        const handled = handler(e);
        if (handled === true) return true;
      } catch (ex) {
        logger.error(
          `An error occured during event ${this.name} is handled by ${handler}`
        );
        logger.error(ex);
      }
    }
    return false;
  }
}
