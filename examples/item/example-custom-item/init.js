(function () {
  // en:
  // Determine a unique ID for the custom item.
  // A random value greater than or equal to 10000000000 might be a good choice.
  // Code to generate: 10000000000 + Math.floor(Math.random() * 10000000000)
  //
  // ja:
  // カスタムアイテム用の一意のIDを決める
  // 10000000000以上のランダムな値がいいかも
  // 生成用コード: 10000000000 + Math.floor(Math.random() * 10000000000)
  const customItemId = 13558178434;

  // en: Add a custom item to the master data
  // ja: マスターデータにカスタムアイテムを追加
  maginai.events.gameLoadFinished.addHandler(() => {
    tWgm.tGameItem.masterData.items[customItemId] = [
      1, // ?
      // en: The name of the item
      // ja: アイテム名
      'カスタムアイテム',
      1, // ?
      // en: The description of the item
      // ja: アイテムの説明
      'これはカスタムアイテムの説明です。',
      null, // ?
      1, // ?
      40000, // ?
      80, // ?
      1, // ?
      8000, // ?
      null, // ?
      1, // ?
      1, // ?
      1, // ?
      [
        1, // ?
        ['f'], // ?
      ], // ?
      1, // ?
      0, // ?
      0, // ?
      1, // ?
      0, // ?
      0, // ?
      1, // ?
    ];
  });

  // en: Patch `getItemSkill` to set the effects of the item
  // ja: `getItemSkill`をパッチしてアイテムの効果を設定
  maginai.patcher2.patchMethod(
    tGameItem,
    'getItemSkill',
    (self, getItemSkill, args) => {
      const [chara, item] = args;
      if (item[1] === customItemId) {
        return tWgm.tGameSkillAction.convertSkillData([
          4, // ?
          [5, 1], // ?
          // en: The name of the skill
          // ja: スキル名
          self.getItemName(item),
          3, // ?
          null, // ?
          null, // ?
          null, // ?
          2, // ?
          null, // ?
          // en: Skill action
          // ja: スキルアクション
          'cure',
          // en: Skill action settings
          // ja: スキルアクションの設定
          [1111, 2222, 3333],
          null, // ?
          [1, 'ef20'], // ?
          null, // ?
        ]);
      } else {
        return getItemSkill(...args);
      }
    }
  );

  // en: Add a custom item to the player's inventory when loading a save is completed
  // ja: セーブの読み込みが完了したときにプレイヤーの持ち物にカスタムアイテムを追加
  maginai.events.saveLoaded.addHandler(() => {
    // en: Create an item
    // ja: アイテムを作成
    const item = tWgm.tGameItem.createItem({
      itemId: customItemId,
      isShikibetsu: true,
      isNoroi: false,
    });

    // en: Add the item to the character's inventory
    // ja: キャラクターの持ち物にアイテムを追加
    const charaId = 'player';
    tWgm.tGameCharactor.addItem(charaId, item);
  });
})();
