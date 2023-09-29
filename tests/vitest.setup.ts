import { afterEach } from 'node:test';
import { should } from 'vitest';
import logging from 'loglevel';
import { applyAllLogger } from './test-util';

// Enable should style assertion
should();

declare global {
  var testGlobalDefined: boolean | undefined;
  var maginaiConfig: any;
}

afterEach(() => {
  applyAllLogger((logger) => logger.resetLevel());
});

logging.setDefaultLevel('error');

if (!globalThis.testGlobalDefined) {
  // Mocking config.js
  globalThis.maginaiConfig = {
    logLevel: 'error',
  };
  globalThis.testGlobalDefined = true;
}
