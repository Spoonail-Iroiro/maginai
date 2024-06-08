(function () {
  const logger = maginai.logging.getLogger('example-add-log');

  // en: Display a message in the game log when loading a save is completed
  // ja: セーブの読み込みが完了したときにゲームのログにメッセージを表示
  maginai.events.saveLoaded.addHandler(() => {
    // en: Add a log
    // ja: ログを追加
    tWgm.tGameLog.addLog(
      // en: Contents of the log
      // ja: ログの内容
      'Hello another world!',
      // en: Whether to display the time
      // ja: 時刻を表示するか
      true
    );

    // en: You can add colors to logs using the %c[] syntax
    // ja: %c[]構文を使ってログに色を付けられます
    tWgm.tGameLog.addLog(
      'Default. %c[charactor]Character. %c[logitem]Item. %c[logdamage]Damage. %c[logcure]Heal. %c[log]Default again.',
      true
    );

    // en: `tWgm.tGameText.colorData` contains all the values that can be used with %c[]
    // ja: `tWgm.tGameText.colorData`に%c[]で使えるすべての値が入っています
    logger.info('tWgm.tGameText.colorData:', tWgm.tGameText.colorData);
  });
})();
