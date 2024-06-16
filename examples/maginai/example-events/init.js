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

  // en:
  // This handler can block all other command key handlers!
  // Please remove this code if you want to use other mods that use the command keys with this mod.
  //
  // ja:
  // このハンドラーは他のModのコマンドキーイベントハンドラーをすべてブロックする可能性があります！
  // コマンドキーを使う他のModとこのModを一緒にインストールする場合は、このハンドラー追加コードを削除してください
  maginai.events.commandKeyClicked.addHandler((e) => {
    logger.info('commandKeyClicked', e);
    e.end();
    return true;
  });

  maginai.events.gameLoadFinished.addHandler(() => {
    logger.info('gameLoadFinished');
  });

  maginai.events.saveLoading.addHandler(() => {
    logger.info('saveLoading');
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
