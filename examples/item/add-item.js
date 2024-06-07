(function () {
  // ニューゲーム時にプレイヤーの持ち物にあかりの巻物を追加する
  maginai.events.saveLoaded.addHandler(({ isNewGame }) => {
    if (!isNewGame) return;

    // アイテムを作成
    const item = tWgm.tGameItem.createItem({
      itemId: 20001, // あかりの巻物
      isShikibetsu: true, // 識別されているか
      isNoroi: false, // 呪われているか
    });

    // プレイヤーの持ち物にアイテムを追加
    const charaId = 'player';
    tWgm.tGameCharactor.addItem(charaId, item);
  });
})();
