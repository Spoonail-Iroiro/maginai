(function () {
  const logger = maginai.logging.getLogger('map-list');

  // en: Output all maps to the console when loading a save is completed
  // ja: セーブの読み込みが完了したときにすべてのマップをコンソールに出力
  maginai.events.saveLoaded.addHandler(() => {
    for (const mapId in tWgm.tGameMap.maps) {
      const map = tWgm.tGameMap.maps[mapId];
      logger.info(mapId, map);
    }
  });
})();
