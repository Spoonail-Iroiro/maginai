(function () {
  // カスタムアイテム用の一意のIDを決める
  // 10000000000以上のランダムな値がいいかも
  // 生成用コード: 10000000000 + Math.floor(Math.random() * 10000000000)
  const customItemId = 13558178434;

  // マスターデータにカスタムアイテムを追加
  maginai.events.gameLoadFinished.addHandler(() => {
    tWgm.tGameItem.masterData.items[customItemId] = [
      1, // ?
      'カスタムアイテム', // アイテム名
      1, // ?
      'これはカスタムアイテムの説明です。', // アイテムの説明
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

  // アイテムスキルをパッチしてアイテムの効果を設定
  maginai.patcher2.patchMethod(
    tGameItem,
    'getItemSkill',
    (self, getItemSkill, args) => {
      const [chara, item] = args;
      if (item[1] === customItemId) {
        return tWgm.tGameSkillAction.convertSkillData([
          4, // ?
          [5, 1], // ?
          self.getItemName(item), // アイテム名
          3, // ?
          null, // ?
          null, // ?
          null, // ?
          2, // ?
          null, // ?
          'cure', // スキルアクション
          [1111, 2222, 3333], // スキルアクションの設定
          null, // ?
          [1, 'ef20'], // ?
          null, // ?
        ]);
      } else {
        return getItemSkill(...args);
      }
    }
  );

  // セーブデータロード時にプレイヤーの持ち物にカスタムアイテムを追加
  maginai.events.saveLoaded.addHandler(() => {
    // アイテムを作成
    const item = tWgm.tGameItem.createItem({
      itemId: customItemId,
      isShikibetsu: true,
      isNoroi: false,
    });

    // プレイヤーの持ち物にアイテムを追加
    const charaId = 'player';
    tWgm.tGameCharactor.addItem(charaId, item);
  });
})();
