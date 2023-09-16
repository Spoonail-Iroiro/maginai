import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec, execSync } from 'node:child_process';
import os from 'node:os';
import { version } from '../js/mod/modules/version.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projDir = path.dirname(__dirname);

const devRoot = path.resolve('./js/mod');
const buildRoot = path.resolve('./game/game/js/mod');
const releaseArchiveName = `maginai-${version}.zip`;
const distDir = path.resolve('./dist');
const assetDir = path.resolve('./assets');
if (path.dirname(distDir) !== projDir) {
  throw new Error(`distDir is not under project ${projDir}, ${distDir}`);
}
fs.rmSync(distDir, {
  recursive: true,
  force: true,
});
const libDir = path.resolve('./lib');
const files = [
  ['config.js', null],
  ['mods_default', 'mods'],
];

// make tempdir
const tempDir = fs.mkdtempSync(os.tmpdir() + '/');
// define release dirs
const releaseDir = path.join(tempDir, 'maginai');
// make releaseDir by copying assets
fs.cpSync(assetDir, releaseDir, { recursive: true });
const modDir = path.join(releaseDir, 'mod');
fs.mkdirSync(modDir);

// copy built loader
fs.cpSync(path.join(buildRoot, 'loader.js'), path.join(modDir, 'loader.js'));

// copy source assets (e.g. config.js)
for (let [srcName, dstName] of files) {
  fs.cpSync(
    path.join(devRoot, srcName),
    path.join(modDir, dstName ?? srcName),
    { recursive: true }
  );
}

// zip
execSync(
  `cd "${tempDir}" && zip -r "${path.join(
    tempDir,
    releaseArchiveName
  )}" "maginai/"`
);

// copy release zip from temp to ./dist
fs.cpSync(
  path.join(tempDir, releaseArchiveName),
  path.join(distDir, releaseArchiveName)
);

// ./dist/maginai is contents of releaase zip
fs.cpSync(path.join(tempDir, 'maginai'), path.join(distDir, `maginai`), {
  recursive: true,
});

console.log(`Temp: ${tempDir}`);
console.log(`Successfully released under ${distDir}`);
