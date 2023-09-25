declare var testGlobalDefined: boolean | undefined;
declare var maginaiConfig: any;

if (!globalThis.testGlobalDefined) {
  // Mocking config.js
  globalThis.maginaiConfig = {
    logLevel: 'debug',
  };
  globalThis.testGlobalDefined = true;
}
