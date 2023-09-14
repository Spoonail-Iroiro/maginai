import fs from 'node:fs';
import { join } from 'node:path';
import { exec, execSync } from 'node:child_process';
import os from 'node:os';

const tempDir = fs.mkdtempSync(os.tmpdir() + '/');
const distDir = './dist';
const releaseArchiveName = 'sampleMod.zip';

execSync(
  `cd ./js && zip -r "${join(tempDir, releaseArchiveName)}" "sampleMod/"`
);

execSync(
  `cp "${join(tempDir, releaseArchiveName)}" "${join(
    distDir,
    releaseArchiveName
  )}"`
);
