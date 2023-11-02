import path from 'path';
import url from 'url';


const __fileName = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__fileName);


