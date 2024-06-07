(function () {
  // セーブデータロード時にゲームのログにメッセージを表示
  maginai.events.saveLoaded.addHandler(() => {
    tWgm.tGameLog.addLog(
      'Hello world!', // ログの内容
      true // 時刻を表示するか
    );
  });
})();
