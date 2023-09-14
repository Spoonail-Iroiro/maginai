import fs from 'node:fs';
import path from 'node:path';
import { exec, execSync } from 'node:child_process';
import os from 'node:os';
import { version } from '../js/mod/modules/version.js';

const devRoot = './js/mod';
const buildRoot = './game/game/js/mod';
const releaseArchiveName = `maginai-${version}.zip`;
const distDir = './dist';
const libDir = './lib';
const files = [
  ['config.js', null],
  ['mods_default', 'mods'],
];

const tempDir = fs.mkdtempSync(os.tmpdir() + '/');
const releaseDir = path.join(tempDir, 'maginai');
fs.mkdirSync(releaseDir);
const modDir = path.join(releaseDir, 'mod');
fs.mkdirSync(modDir);

fs.cpSync(path.join(buildRoot, 'loader.js'), path.join(modDir, 'loader.js'));
// fs.cpSync(path.join(buildRoot, "loader.js"), path.join(libDir, "loader.js"));

for (let [srcName, dstName] of files) {
  fs.cpSync(
    path.join(devRoot, srcName),
    path.join(modDir, dstName ?? srcName),
    { recursive: true }
  );
}

// fs.cpSync(path.join(devRoot, "mods_default"), path.join(modDir, "mods"), {
//   recursive: true,
// });

execSync(
  `cd "${tempDir}" && zip -r "${path.join(
    tempDir,
    releaseArchiveName
  )}" "maginai/"`
);

fs.cpSync(
  path.join(tempDir, releaseArchiveName),
  path.join(distDir, releaseArchiveName)
);

console.log(`Temp: ${tempDir}`);
console.log(`Successfully released under ${distDir}`);
