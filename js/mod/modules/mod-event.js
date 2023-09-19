import logging from 'loglevel';

const logger = logging.getLogger('maginai.events');

/**
 * イベントクラス
 */
class ModEvent {
  /**
   * @internal
   * @param {string} name イベント名
   * @param {string} description 説明
   */
  constructor(name, description = 'Event') {
    if (name === undefined) {
      throw new Error(`Name cannot be undefined`);
    }
    this.name = name;
    this.description = description;
    this.handlers = [];
    this.hasHandler = false;
  }

  /**
   * イベントの発火
   * @private
   * @param {object} e イベントオブジェクト
   */
  invoke(e) {
    for (const handler of this.handlers) {
      try {
        handler(e);
      } catch (ex) {
        logger.error(
          `An error occured during event ${this.name} is handled by ${handler}`
        );
        logger.error(ex);
      }
    }
  }

  /**
   * イベントハンドラーの追加
   * @param {Function} handler
   */
  addHandler(handler) {
    this.handlers.push(handler);
    this.hasHandler = true;
  }

  /**
   * イベントハンドラーの削除
   * @param {Function} handler
   */
  removeHandler(handler) {
    if (this.handlers.indexOf(handler) === -1) {
      throw new Error(`Cannot remove unregistered handler`);
    }

    this.handlers = this.handlers.filter((elm) => elm !== handler);
    if (this.handlers.length == 0) this.hasHandler = false;
  }
}

export { ModEvent };
