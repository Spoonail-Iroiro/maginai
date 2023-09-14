import logging from "./logging.js";

const logger = logging.getLogger("maginai.events");

class ModEvent {
  constructor(name, description = "Event") {
    if (name === undefined) {
      throw new Error(`Name cannot be undefined`);
    }
    this.name = name;
    this.description = description;
    this.handlers = [];
    this.hasHandler = false;
  }

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

  addHandler(handler) {
    this.handlers.push(handler);
    this.hasHandler = true;
  }

  removeHandler(handler) {
    if (this.handlers.indexOf(handler) === -1) {
      throw new Error(`Cannot remove unregistered handler`);
    }

    this.handlers = this.handlers.filter((elm) => elm !== handler);
    if (this.handlers.length == 0) this.hasHandler = false;
  }
}

export { ModEvent };
