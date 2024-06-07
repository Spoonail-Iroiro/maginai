(function () {
  // セーブデータロード時にプレイヤーにお金を取得させる
  maginai.events.saveLoaded.addHandler(() => {
    const chara = tWgm.tGameCharactor.charas.player;
    const amount = 1000000;
    tWgm.tGameCharactor.addMoney(chara, amount);
  });
})();
