import _log from './modules/logging.js';
import { Maginai } from './modules/maginai.js';

const maginai = new Maginai();

maginai.init();

maginai.loadMods();

export default maginai;
