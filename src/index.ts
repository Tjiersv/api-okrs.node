import { startServer } from './config';
import { getLogger } from './handlers';

const dependencies = {
    logger: getLogger()
}

startServer(dependencies);