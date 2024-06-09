(function () {
  // en: Make a Snail appear at The Place of Beginning when starting a new game
  // ja: ニューゲーム時にはじまりの地にマイマイを出現させる
  maginai.events.saveLoaded.addHandler(({ isNewGame }) => {
    if (!isNewGame) return;

    // en: Spawn an enemy
    // ja: 敵を出現させる
    const charaId = tWgm.tGameCharactor.addEnemy({
      // en: Snail's ID
      // ja: マイマイのID
      dataId: 100011,
      // en: The Place of Beginning's ID
      // ja: はじまりの地のID
      mapId: 'hajimarinochi',
      // en: Coordinates of the enemy to spawn
      // ja: 出現させる敵の座標
      position: [22, 26],
    });

    if (charaId) {
      // en: Add the character to the map
      // ja: マップにキャラクターを追加
      tWgm.tGameMap.maps['hajimarinochi'].charas[charaId] =
        tWgm.tGameCharactor.charas[charaId];

      // en: Update map information for display on the screen
      // ja: 画面に表示するためにマップ情報を更新
      tWgm.tGameRoutineMap.updateMapInfoAll();
    }
  });
})();
