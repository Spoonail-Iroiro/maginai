// import { Maginai } from '../../modules/maginai.js';
// const maginai = new Maginai();

// `init.js` of `sample4` mod, which counts how many times you performed saving
(function () {
  const logger = maginai.logging.getLogger('sample4');

  // Variable for counting saving
  let saveCount;

  maginai.modSave.addSaveObjectHandlers(
    // `name` - Mod's name
    'sample4',

    // `notFoundHandler` - Called when no existing save object for `name`
    (isNewGame) => {
      // Initialize saveCount
      saveCount = 0;
      // Show a message and whether it's a new game
      logger.info(
        `'sample4' is applied to this save for the first time. isNewGame: ${isNewGame}`
      );
    },

    // `loadHandler` - Called when existing save object found for `name`
    (saveObj) => {
      saveCount = saveObj.saveCount;
      // Show the `saveCount` loaded from the save
      logger.info(
        `Save object has been loaded. saveCount:` + saveCount.toString()
      );
    },

    // `saveHandler` - Should return a save object to be written for `name`
    () => {
      // Increment `saveCount` by 1
      saveCount += 1;
      // Show the current `saveCount`
      logger.info(
        `Save object has been saved. saveCount:` + saveCount.toString()
      );
      // Return a new save object
      return { saveCount };
    }
  );
})();
