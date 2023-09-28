import { should } from 'vitest';
import logging from 'loglevel';

// Enable should style assertion
should();

declare global {
  var testGlobalDefined: boolean | undefined;
  var maginaiConfig: any;
}

// Set log level for test
logging.setLevel('error');

if (!globalThis.testGlobalDefined) {
  // Mocking config.js
  globalThis.maginaiConfig = {
    logLevel: 'error',
  };
  globalThis.testGlobalDefined = true;
}
