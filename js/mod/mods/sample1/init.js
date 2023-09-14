(function () {
  maginai.events.tWgmLoad.addHandler((e) => {
    tWgm.isL = true;
  });
  maginai.events.gameLoadFinished.addHandler((e) =>
    console.log('Game load finished!')
  );
})();
