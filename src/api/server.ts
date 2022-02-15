import express from 'express';
import { Logger } from '../handlers';
import routes from './routes';

export const start = (logger: Logger) => (): void => {
  try {
    const app = express();
    routes(app);
    logger.info('[server -> start]: Init Server');
    const port = process.env.PORT || 3000;
    app.listen(port, () => logger.info(`Server running in port: ${port}`));
  } catch (error) {
    logger.error(`[server -> start]: Error: ${error}`);
  }
};