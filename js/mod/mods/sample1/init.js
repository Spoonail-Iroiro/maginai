(function () {
  maginai.events.tWgmLoad.addHandler((e) => {
    tWgm.isL = true;
  });
  maginai.events.gameLoadFinished.addHandler((e) =>
    console.log('Game load finished!')
  );
  maginai.events.commandKeyClick.addHandler((e) => {
    if (e.keyCode === 'f4') {
      tWgm.tGameLog.addAndViewLog('F4キーが押されました');
      e.end();
      return true;
    }
  });
})();
