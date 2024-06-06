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
      throw new Error(`${type} is invalid type for name. It should be string`);
    }
    if (typeof description !== 'string') {
      const type = readableTypeof(description);
      throw new Error(
        `${type} is invalid type for description. It should be string`
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
        logger.error(`An error occurred during ${this.name} event`);
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
        `${type} is invalid type for event handler. It should be function`
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
        `${type} is invalid argument type. Specify handler function to be removed`
      );
    }
    if (this.handlers.indexOf(handler) === -1) {
      throw new Error(`Passed function is not a handler of this event`);
    }

    this.handlers = this.handlers.filter((elm) => elm !== handler);
    if (this.handlers.length == 0) this.hasHandler = false;
  }
}

export { ModEvent };
