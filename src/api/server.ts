import express from 'express';
import { Logger } from '../handlers';
import routes from './routes';
type dependencies = {
  logger: Logger,
}

export const server = ({ logger }: dependencies) => ({
  start: (): express.Express => {
    const app = express();
    routes(app);
    logger.info('[server -> start]: Init Server');
    const port = process.env.PORT || 3000;
    app.listen(port, () => logger.info(`Server running in port: ${port}`));
    return app;
  }
});