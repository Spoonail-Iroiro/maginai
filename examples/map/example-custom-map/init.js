(function () {
  // en:
  // Determine a unique ID for the custom map
  // To avoid ID conflicts between mods, it might be a good idea to use a format like `mod-name.map-name`.
  //
  // ja:
  // カスタムマップ用の一意のIDを決める
  // Mod間でIDがぶつかるのを避けるため`mod-name.map-name`のような形式がいいかも
  const customMapId = 'example-custom-map.my-custom-map';

  // en: Add a custom map when loading a save is completed
  // ja: セーブの読み込みが完了したときにカスタムマップを追加
  maginai.events.saveLoaded.addHandler(() => {
    // en: Do not add if a custom map has already been added
    // ja: すでにカスタムマップが追加されている場合は追加しない
    if (tWgm.tGameMap.maps[customMapId] !== undefined) {
      return;
    }

    const mapSize = [32, 32];
    const mapData = [];

    // en: Initialize the map data
    // ja: マップデータを初期化
    mapData.length = mapSize[0] * mapSize[1];

    for (let x = 0; x < mapSize[0]; x++) {
      for (let y = 0; y < mapSize[1]; y++) {
        const index = x + y * mapSize[0];
        // en: Set the chipset ID
        // ja: チップセットIDを設定
        mapData[index] = 0;
      }
    }

    const map = {
      // en: Unique map ID
      // ja: 一意のマップのID
      mapId: customMapId,
      // en: Map name
      // ja: マップ名
      name: 'カスタムマップ',
      // en: BGM ID
      // ja: BGMのID
      bgmId: null,
      // ?
      chipsize: tWgm.screen.chipsize,
      // en: Map size
      // ja: マップの大きさ
      size: mapSize,
      // en: Array of map chipset(tileset) IDs
      // ja: マップのチップセットIDの配列
      map: mapData,
      // ?
      omap: {},
      // ?
      lookMap: [],
      // ?
      lookObjects: {},
      // en: All characters in the map
      // ja: マップ内のすべてのキャラクター
      charas: {},
      // ?
      objects: [],
      // ?
      houses: [],
      // en:
      // Action when touching the edge of the map
      // Do nothing when it is null
      //
      // ja:
      // マップ端に接触したときのアクション
      // nullのときは何もしない
      edgeAction: [
        // en: Type of edge action
        // ja: エッジアクションの種類
        'changeMap',
        // en: Destination map ID
        // ja: 移動先のマップID
        'hajimarinochi',
        // en: Destination coordinates
        // ja: 移動先の座標
        [21, 28],
      ],
      // en: Whether to delete the map after exiting from it
      // ja: マップから出た後にマップを削除するかどうか
      autoDelete: false,
    };

    // en: Add the map
    // ja: マップを追加
    tWgm.tGameMap.addMap(map);
  });

  // en: Press the F1 key to move to the custom map.
  // ja: F1キーが押されたときにカスタムマップへ移動
  maginai.events.commandKeyClicked.addHandler((event) => {
    if (event.keyCode === 'f1') {
      // en: Set up a link to allow returning to the previous map from The Place of Beginning.
      // ja: はじまりの地から前のマップへ戻れるようにリンクを設定
      const player = tWgm.tGameCharactor.charas.player;
      const viewMapInfo = tWgm.tGameData.getDataValue('viewMapInfo');
      const linkMap = tWgm.tGameData.getDataValue('linkMap');
      linkMap['hajimarinochi'] = [player.mapId, player.position, viewMapInfo];
      tWgm.tGameData.setDataValue('linkMap', linkMap);

      // en: Move to the custom map
      // ja: カスタムマップへ移動
      tWgm.tGameRoutineMap.viewMap(customMapId, (success) => {}, [15, 15]);

      event.end();
      return true;
    }
  });
})();
