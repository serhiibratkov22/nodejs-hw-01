import { fileURLToPath } from 'node:url';

export const PATH_DB = fileURLToPath(new URL('../db/db.json', import.meta.url));
