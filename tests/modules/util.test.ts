import { describe, expect, test } from 'vitest';
import { versionToversionInfo } from '@/modules/util.js';
import { Maginai } from '@/modules/maginai';

test('make version info', () => {
  versionToversionInfo('0.3.0').should.be.deep.equal([0, 3, 0, null, null]);
  versionToversionInfo('12.31.0').should.be.deep.equal([12, 31, 0, null, null]);
  versionToversionInfo('1.3.1-alpha.1').should.be.deep.equal([
    1,
    3,
    1,
    'alpha',
    1,
  ]);
  expect(() => versionToversionInfo('')).toThrowError(
    'バージョン文字列が不正です'
  );

  expect(() => versionToversionInfo('0.1.0-0')).toThrowError(
    'バージョン文字列が不正です。prereleaseに--preid指定がありません'
  );
});
