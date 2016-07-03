import path from 'path';
import fs from 'fs';

export const json = (basedir, relPath) => JSON.parse(fs.readFileSync(path.join(basedir, relPath)));
