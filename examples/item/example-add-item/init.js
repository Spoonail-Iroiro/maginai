(function () {
  // en: Add a Scroll of Light to the player's inventory when loading a save is completed
  // ja: セーブの読み込みが完了したときにプレイヤーの持ち物にあかりの巻物を追加する
  maginai.events.saveLoaded.addHandler(() => {
    // en: Create an item
    // ja: アイテムを作成
    const item = tWgm.tGameItem.createItem({
      // en: Scroll of Light's ID
      // ja: あかりの巻物のID
      itemId: 20001,
      // en: Whether to appraise the item or not
      // ja: アイテムを鑑定済みにするかどうか
      isShikibetsu: true,
      // en: Whether to curse the item or not
      // ja: アイテムが呪われているかどうか
      isNoroi: false,
    });

    // en: Add the item to the character's inventory
    // ja: キャラクターの持ち物にアイテムを追加
    const charaId = 'player';
    tWgm.tGameCharactor.addItem(charaId, item);
  });
})();
