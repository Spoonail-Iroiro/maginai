import { ModEvent } from './mod-event.js';
import logging from 'loglevel';

const logger = logging.getLogger('maginai.event');

/**
 * Cancelable mod event class
 *
 * If one of the event handlers returned `true`, the subsequent handlers will not be called.
 *
 * \* See {@link MaginaiEvents} class for all events provided by `maginai`
 */
export class CancelableModEvent extends ModEvent {
  /**
   * @internal
   * @param {string} name - Event name
   * @param {string} description - Description
   */
  constructor(name, description = 'KeyEvent') {
    super(name, description);
  }

  /**
   * @internal
   * @param {object} e - Event arg object
   * @returns {boolean} handled - Whether the event has been handled by a handler
   */
  invoke(e) {
    for (const handler of this.handlers) {
      try {
        const handled = handler(e);
        if (handled === true) return true;
      } catch (ex) {
        logger.error(
          `An error occurred during event ${this.name} is handled by ${handler}`
        );
        logger.error(ex);
      }
    }
    return false;
  }
}
