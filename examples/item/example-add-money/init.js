(function () {
  // en: Give the player money when loading a save is completed
  // ja: セーブの読み込みが完了したときにプレイヤーにお金を与える
  maginai.events.saveLoaded.addHandler(() => {
    // en: Give money to the character
    // ja: キャラクターにお金を与える
    const chara = tWgm.tGameCharactor.charas['player'];
    const amount = 1000000;
    tWgm.tGameCharactor.addMoney(chara, amount);
  });
})();
