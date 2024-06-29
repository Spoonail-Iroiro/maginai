(function () {
  // en: Display a message in the game log when loading a save is completed
  // ja: セーブの読み込みが完了したときにゲームのログにメッセージを表示
  maginai.events.saveLoaded.addHandler(() => {
    // ne: You can embed values into a string using the %v[] syntax of `convertValue`
    // ja: `convertValue`の%v[]構文を使って文字列に値を埋め込むことができます
    const log = tWgm.tGameTalkResource.convertValue(
      '%v[0] %v[1]!', // string
      [
        'Hello', // %v[0]
        'another world', // %v[1]
      ]
    );

    // en: Add a log
    // ja: ログを追加
    tWgm.tGameLog.addLog(log, true);
  });
})();
