// Copy the examples in the mods directory of the Steam version of CoAW.
// * Supports Windows only

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { examples } from '../examples/examples.js';

const steamPath = 'C:/Program Files (x86)/Steam';
const gamePath = `${steamPath}/steamapps/common/isekainosouzousha`;
const modsPath = `${gamePath}/game/js/mod/mods`;

if (!fs.existsSync(gamePath)) {
  console.error(`Game path not found: ${gamePath}`);
  process.exit(1);
}

for (const example of examples) {
  const exampleName = path.basename(example);
  const examplePath = `../examples/${example}`;
  const modPath = `${modsPath}/${exampleName}`;

  fs.rmSync(modPath, { recursive: true, force: true });
  fs.mkdirSync(modPath, { recursive: true });

  fs.cpSync(`${import.meta.dirname}/${examplePath}`, modPath, {
    recursive: true,
  });

  console.log(`Copied ${example}`);
}
