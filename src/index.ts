import { Application } from 'express';
import { server } from './api';
import { getLogger } from './handlers';

const logger = getLogger();
const app: Application = server({ logger }).start();
export default app;