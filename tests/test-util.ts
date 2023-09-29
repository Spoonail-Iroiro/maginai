import logging from 'loglevel';

export function applyAllLogger(fn: (logger: logging.Logger) => void) {
  for (const logger of Object.values(logging.getLoggers())) {
    fn(logger);
    // logger.setLevel('error', false);
  }
}
