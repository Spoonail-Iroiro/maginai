(function () {
  const logger = maginai.logging.getLogger('map-list');

  // セーブデータロード時にすべてのマップをコンソールに出力
  maginai.events.saveLoaded.addHandler(() => {
    for (const mapId in tWgm.tGameMap.maps) {
      const map = tWgm.tGameMap.maps[mapId];
      logger.info(mapId, map);
    }
  });
})();
