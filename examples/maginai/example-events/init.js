// Documentation: https://spoonail-iroiro.github.io/maginai/classes/MaginaiEvents.html

(function () {
  const logger = maginai.logging.getLogger('events');

  let beforeRefreshCount = 0;
  let afterRefreshCount = 0;

  maginai.events.afterRefresh.addHandler(() => {
    if (afterRefreshCount < 2) {
      logger.info('afterRefresh');
      afterRefreshCount += 1;
    } else if (afterRefreshCount == 2) {
      logger.info('afterRefresh (continues to be triggered with every update)');
      afterRefreshCount += 1;
    }
  });

  maginai.events.beforeRefresh.addHandler(() => {
    if (beforeRefreshCount < 2) {
      logger.info('beforeRefresh');
      beforeRefreshCount += 1;
    } else if (beforeRefreshCount == 2) {
      logger.info(
        'beforeRefresh (continues to be triggered with every update)'
      );
      beforeRefreshCount += 1;
    }
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
