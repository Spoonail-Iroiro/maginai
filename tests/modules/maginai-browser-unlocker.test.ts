import {
  describe,
  test,
  vi,
  beforeEach,
  afterEach,
  should,
  SpyInstance,
} from 'vitest';
import { MaginaiBrowserUnlocker } from '@/modules/maginai-browser-unlocker';

declare var tWgm: any;

beforeEach(() => {
  vi.unstubAllGlobals();
});
afterEach(() => {
  vi.unstubAllGlobals();
});

interface browserUnlockerFixture {
  arranged: {
    browserUnlocker: MaginaiBrowserUnlocker;
  };
}

const browserUnlockerTest = test.extend<browserUnlockerFixture>({
  arranged: async ({ task }, use) => {
    class tGameMainMock {
      constructor() {}

      getGameType() {
        return 'steam';
      }
      initFirstLog() {}
    }

    vi.stubGlobal('tGameMain', tGameMainMock);

    const browserUnlocker = new MaginaiBrowserUnlocker();
    browserUnlocker.init();

    const tWgmMock = new tGameMainMock();
    vi.stubGlobal('tWgm', tWgmMock);

    await use({
      browserUnlocker,
    });
  },
});

browserUnlockerTest(
  'getGameType returns "" only once after initLog',
  ({ arranged: { browserUnlocker } }) => {
    tWgm.getGameType().should.be.equal('steam');

    tWgm.getGameType().should.be.equal('steam');

    tWgm.initFirstLog();

    tWgm.getGameType().should.be.equal('');

    tWgm.getGameType().should.be.equal('steam');

    tWgm.getGameType().should.be.equal('steam');

    tWgm.initFirstLog();

    tWgm.getGameType().should.be.equal('steam');
  }
);
