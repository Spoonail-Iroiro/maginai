// Documentation: https://spoonail-iroiro.github.io/maginai/classes/MaginaiEvents.html

(function () {
  const logger = maginai.logging.getLogger('events');

  maginai.events.afterRefresh.addHandler(() => {
    logger.info('afterRefresh');
  });

  maginai.events.beforeRefresh.addHandler(() => {
    logger.info('beforeRefresh');
  });

  maginai.events.commandKeyClicked.addHandler((e) => {
    logger.info('commandKeyClicked', e);
  });

  maginai.events.gameLoadFinished.addHandler(() => {
    logger.info('gameLoadFinished');
  });

  maginai.events.saveLoaded.addHandler(() => {
    logger.info('saveLoaded');
  });

  maginai.events.saveObjectRequired.addHandler(() => {
    logger.info('saveObjectRequired');
  });

  maginai.events.tWgmLoaded.addHandler(() => {
    logger.info('tWgmLoaded');
  });
})();
