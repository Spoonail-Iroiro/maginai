(function () {
  // en:
  // Controls
  //   F1: Move to the last town visited by the player
  //   F2: Move to The Place of Beginning
  //   F3: Return to the previous map from The Place of Beginning
  //
  // ja:
  // 操作方法
  //   F1: プレイヤーが最後に訪れた町に移動する
  //   F2: はじまりの地に移動する
  //   F3: はじまりの地から前のマップに戻る
  maginai.events.commandKeyClicked.addHandler((event) => {
    // en: When the F1 key is pressed, use `viewMap` to move the player to the last town they visited
    // ja: F1キーが押されたときに`viewMap`を使ってプレイヤーが最後に訪れた町に移動
    if (event.keyCode === 'f1') {
      // en: Get the last visited town as an object on the field
      // ja: 最後に訪れた町をフィールド上のオブジェクトとして取得
      const [fieldMapId, objId] = tWgm.tGameData.getDataValue('lastInTown');
      const { object } = tWgm.tGameMap.searchMapObject(fieldMapId, objId);

      // en: Move the map
      // ja: マップを移動
      tWgm.tGameRoutineMap.viewMap(
        // en: Destination map ID
        // ja: 移動先のマップID
        fieldMapId,
        // en: Callback
        // ja: コールバック
        (success) => {},
        // en: Destination coordinates
        // ja: 移動先の座標
        [object[0], object[1]],
      );

      event.end();
      return true;
    }

    // en: When the F2 key is pressed, use `viewLinkMap` to move to The Place of Beginning
    // ja: F2キーが押されたときに`viewLinkMap`を使ってはじまりの地に移動
    if (event.keyCode === 'f2') {
      const player = tWgm.tGameCharactor.charas.player;

      // en:
      // Move the map
      // When `viewBackLinkMap` is called on the map after moving, it returns to the previously visited map
      //
      // ja:
      // マップを移動
      // 移動後のマップで`viewBackLinkMap`が呼ばれると元居たマップに戻ります
      tWgm.tGameRoutineMap.viewLinkMap({
        // en: Source map
        // ja: 移動元のマップ
        from: {
          // en: Map ID
          // ja: マップID
          mapId: player.mapId,
          // en: Coordinates
          // ja: 座標
          position: player.position,
        },
        // en: Destination map
        // ja: 移動先のマップ
        to: {
          // en: Map ID
          // ja: マップID
          mapId: 'hajimarinochi',
          // en: Coordinates
          // ja: 座標
          position: [21, 28],
        },
        // en: Callback
        // ja: コールバック
        callBack: (success) => {},
        // ?
        escapeType: null,
        // en: Whether to enable saving on the destination map
        // ja: 移動先のマップでセーブを有効にするかどうか
        isSaveEnable: null,
      });

      event.end();
      return true;
    }

    // en: When the F3 key is pressed, use `viewBackLinkMap` to return to the previous map from The Place of Beginning.
    // ja: F3キーが押されたときに`viewBackLinkMap`を使ってはじまりの地から前のマップに戻る
    if (event.keyCode === 'f3') {
      const player = tWgm.tGameCharactor.charas.player;

      // en:
      // Move to the previous map
      // Nothing happens if `viewLinkMap` has not been called
      //
      // ja:
      // 前のマップへ移動
      // `viewLinkMap`が呼ばれていない場合は何も起こりません
      tWgm.tGameRoutineMap.viewBackLinkMap({
        // en: Map ID
        // ja: マップID
        mapId: player.mapId,
        // en: Callback
        // ja: コールバック
        callBack: (success) => {},
      });

      event.end();
      return true;
    }
  });
})();
