(function () {
  const logger = maginai.logging.getLogger('chara-list');

  // en: Output all characters to the console when loading a save is completed
  // ja: セーブの読み込みが完了したときにすべてのキャラクターをコンソールに出力
  maginai.events.saveLoaded.addHandler(() => {
    for (const charaId in tWgm.tGameCharactor.charas) {
      const chara = tWgm.tGameCharactor.charas[charaId];
      logger.info(charaId, chara);
    }
  });
})();
