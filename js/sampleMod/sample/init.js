(function () {
  maginai.events.gameLoadFinished.addHandler((e) => {
    // わかりやすさのためconsole.log使用
    console.log('sample modがロードされました');
    // Modのログにははmaginai.logging.getLoggerでloggerを取得し使用してください

    // ゲーム内ログへのメッセージの表示
    maginai.logToInGameLogDebug('sample modがロードされました。');
  });
})();
