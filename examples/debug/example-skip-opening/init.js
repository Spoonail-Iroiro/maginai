(function () {
  // en:
  // Setting `isTest` to `1` skips the opening.
  // In addition to skipping the opening, there are various other effects.
  //
  // ja:
  // `isTest`を`1`に設定してオープニングをスキップ
  // オープニングのスキップ以外にも様々な影響があります
  maginai.events.gameLoadFinished.addHandler(() => {
    tWgm.tGameData.masterData.value.keys.isTest[1] = 1;
  });
})();
