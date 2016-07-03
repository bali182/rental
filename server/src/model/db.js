import thinky from 'thinky';
import {json} from '../utils/file-utils';

let connection = null;

export const connect = () => thinky(json(__dirname, '../../../config.json').rethinkdbConfig);

export default connect();
