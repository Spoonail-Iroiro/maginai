import { should } from 'vitest';
import logging from 'loglevel';

// Enable should style assertion
should();

declare global {
  var testGlobalDefined: boolean | undefined;
  var maginaiConfig: any;
}

// Set log level for test
logging.setLevel('silent');

if (!globalThis.testGlobalDefined) {
  // Mocking config.js
  globalThis.maginaiConfig = {
    logLevel: 'silent',
  };
  globalThis.testGlobalDefined = true;
}
