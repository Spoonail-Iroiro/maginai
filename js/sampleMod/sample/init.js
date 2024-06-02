(function () {
  maginai.events.gameLoadFinished.addHandler((e) => {
    // To make things simple, we use `console.log` here
    // Generally you should emit logs to the console through a logger, which you can obtain from `maginai.logging.getLogger`.
    console.log("Loaded 'sample' mod.");

    // Emit a message to in-game log
    maginai.logToInGameLogDebug("Loaded 'sample' mod.");
  });
})();
