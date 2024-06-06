import logging from 'loglevel';
import { readableTypeof } from '../util.js';

const logger = logging.getLogger('maginai.event');

/**
 * Event class
 *
 * \* See {@link MaginaiEvents} class for all events provided by `maginai`
 */
class ModEvent {
  /**
   * @internal
   * @param {string} name - Event name
   * @param {string} description - Description
   */
  constructor(name, description = 'Event') {
    if (typeof name !== 'string') {
      const type = readableTypeof(name);
      throw new Error(
        `nameの値が${type}のためModEventを作成できませんでした。nameは文字列である必要があります。`
      );
    }
    if (typeof description !== 'string') {
      const type = readableTypeof(description);
      throw new Error(
        `descriptionの値が${type}のためModEventを作成できませんでした。descriptionは文字列である必要があります。`
      );
    }
    this.name = name;
    this.description = description;
    this.handlers = [];
    this.hasHandler = false;
  }

  /**
   * @internal
   * @param {object} e - Event arg object
   */
  invoke(e) {
    for (const handler of this.handlers) {
      try {
        handler(e);
      } catch (ex) {
        // TODO: 「xxxx(Mod名)によって登録された～」を追加する
        logger.error(`${this.name}イベント中に次のエラーが発生しました`);
        logger.error(ex);
      }
    }
  }

  /**
   * Add an event handler
   *
   * @param {Function} handler
   */
  addHandler(handler) {
    if (typeof handler !== 'function') {
      const type = readableTypeof(handler);
      throw new Error(
        `handlerの値が${type}のためイベントハンドラーとして追加できませんでした。handlerは関数である必要があります。`
      );
    }
    this.handlers.push(handler);
    this.hasHandler = true;
  }

  /**
   * Remove `handler` from the event
   *
   * @param {Function} handler
   */
  removeHandler(handler) {
    if (typeof handler !== 'function') {
      const type = readableTypeof(handler);
      throw new Error(
        `handlerの値が${type}のためイベントハンドラーの削除に失敗しました。handlerは関数である必要があります。`
      );
    }
    if (this.handlers.indexOf(handler) === -1) {
      throw new Error(
        `handlerが登録されていないためイベントハンドラーの削除に失敗しました`
      );
    }

    this.handlers = this.handlers.filter((elm) => elm !== handler);
    if (this.handlers.length == 0) this.hasHandler = false;
  }
}

export { ModEvent };
