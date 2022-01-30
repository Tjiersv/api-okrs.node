import express from 'express';
import { Logger } from '../handlers';

export const start = (logger: Logger) => () => {
    try {
        logger.info('[server -> start]: Init Server');
        const app = express();
        const port = process.env.PORT || 3000;
        app.listen(port, () => logger.info(`Server running in port: ${port}`));
    } catch (error) {
        logger.error(`[server -> start]: Error: ${error}`);
    }
};