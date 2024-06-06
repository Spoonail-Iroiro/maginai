import logging from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

function initLog() {
  prefix.reg(logging);

  try {
    logging.setLevel(maginaiConfig['logLevel']);
  } catch (e) {
    console.error(
      'Failed to load the config. Please ensure `config.js` exists and contains the necessary content',
      e
    );
    throw e;
  }

  prefix.apply(logging, {
    template: '[%l][%n]',
  });
}
initLog();

export default {};
