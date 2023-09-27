import { should } from 'vitest';
import logging from 'loglevel';

// Enable should style assertion
should();

declare global {
  var testGlobalDefined: boolean | undefined;
  var maginaiConfig: any;
}

if (!globalThis.testGlobalDefined) {
  // Mocking config.js
  globalThis.maginaiConfig = {
    logLevel: 'debug',
  };
  globalThis.testGlobalDefined = true;
}
