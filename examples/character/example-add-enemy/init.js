(function () {
  // ニューゲーム時にはじまりの地にマイマイを出現させる
  maginai.events.saveLoaded.addHandler(({ isNewGame }) => {
    if (!isNewGame) return;

    const charaId = tWgm.tGameCharactor.addEnemy({
      dataId: 100011, // マイマイ
      mapId: 'hajimarinochi', // はじまりの地
      position: [22, 26],
    });

    if (charaId) {
      // マップにキャラクターを追加
      tWgm.tGameMap.maps['hajimarinochi'].charas[charaId] =
        tWgm.tGameCharactor.charas[charaId];

      // 画面に表示するためにマップ情報を更新
      tWgm.tGameRoutineMap.updateMapInfoAll();
    }
  });
})();
