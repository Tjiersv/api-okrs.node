import { getLogger } from '../handlers';
import { start } from './server';

const logger = getLogger();
export default start(logger);