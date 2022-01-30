import express from 'express';
import { log4jsHandler } from '../handlers';

interface startServerParams {
    logger: log4jsHandler
}

export const startServer = (dependencies: startServerParams) => {
    const { logger } = dependencies;
    try {
        logger.info('[start server]: Init Server');
        const app = express();
        const port = process.env.PORT || 3000;
        app.listen(port, () => logger.info(`Server running in port: ${port}`));
    } catch (error) {
        logger.error(`[start server]: Error in module. Error: ${error}`);
    }
};