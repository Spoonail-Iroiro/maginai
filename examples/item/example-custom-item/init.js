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

  // en:
  // Add a custom item to the master data
  // Note:
  // Initially, it is recommended to copy the master data values from an existing item similar to the custom item you want to add.
  // For example, if you want to add a new gift, copy the values from HP gift and then make some adjustments.
  // To see the master data values of existing items, see `tWgm.tGameItem.masterData.items` on the developer console.
  //
  // ja:
  // マスターデータにカスタムアイテムを追加
  // ヒント：
  // 最初に追加したいカスタムアイテムと似た既存のアイテムからマスターデータの値をコピーすることをおすすめします。
  // 例えば新しいギフトを追加したいならHPのギフトの値をコピーしてくるのがよいでしょう。
  // 既存のアイテムのマスターデータの値を見るには、`tWgm.tGameItem.masterData.items`を開発者コンソールで参照してください。
  maginai.events.gameLoadFinished.addHandler(() => {
    tWgm.tGameItem.masterData.items[customItemId] = [
      // [0]
      // en: item type (1=potion, 2=scroll, 3=gem...)
      // ja: アイテム種別(1=薬, 2=巻物, 3=宝玉...)
      1,
      // [1]
      // en: The name of the item
      // ja: アイテム名
      'カスタムアイテム',
      // [2]
      // en: key to determine icon and unidentified name
      // ja: アイコンと未鑑定名を決定するキー
      1,
      // [3]
      // en: The description of the item
      // ja: アイテムの説明
      'これはカスタムアイテムの説明です。',
      null, // ?
      1, // ?
      40000, // ?
      // [7]
      // en: price
      // ja: 価格
      80,
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
      // [22]
      // en: Whether the item is the target of 'Item acquisition' statistics
      // ja: アイテム獲得の実績の対象かどうか
      1,
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
