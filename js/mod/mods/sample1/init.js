// import { Maginai } from '../../modules/maginai.js';
// const maginai = new Maginai();
(function () {
  const logger = maginai.logging.getLogger('sample1');
  maginai.events.tWgmLoaded.addHandler((e) => {
    tWgm.isL = true;
  });

  maginai.events.gameLoadFinished.addHandler((e) => {
    logger.info('Game load finished!');
  });

  maginai.events.commandKeyClicked.addHandler((e) => {
    if (e.keyCode === 'f4') {
      tWgm.tGameLog.addAndViewLog('F4キーが押されました');
      e.end();
      return true;
    }
  });

  maginai.events.saveLoaded.addHandler((e) => {
    logger.info(`Save loaded. isNewGame: ${e.isNewGame}`);
  });
})();
