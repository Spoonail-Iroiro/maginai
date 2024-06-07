(function () {
  const logger = maginai.logging.getLogger('chara-list');

  // セーブデータロード時にすべてのキャラをコンソールに出力
  maginai.events.saveLoaded.addHandler(() => {
    for (const charaId in tWgm.tGameCharactor.charas) {
      const chara = tWgm.tGameCharactor.charas[charaId];
      logger.info(charaId, chara);
    }
  });
})();
