import logging from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

function initLog() {
  prefix.reg(logging);

  try {
    logging.setLevel(maginai_config['logLevel']);
  } catch (e) {
    console.error(
      'Configの読み込みに失敗しました。config.jsが存在しているか、内容が正しいか確認してください',
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
