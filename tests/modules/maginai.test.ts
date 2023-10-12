import { describe, expect, test } from 'vitest';
import { Maginai } from '@/modules/maginai.js';

test('create_instance', () => {
  const maginai = new Maginai();
});

test('maginai version is valid for versionInfo', () => {
  const maginai = new Maginai();

  maginai.VERSION_INFO.length.should.be.equal(5);
});
