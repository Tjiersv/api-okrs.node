import log4js from 'log4js';

export const logger = () => {
    const logger = log4js.getLogger();
    logger.level = process.env.LOGGERLVL || 'debug';
    return {
        trace: (str: string) => logger.trace(str),
        debug: (str: string) => logger.debug(str),
        info: (str: string) => logger.info(str),
        warn: (str: string) => logger.warn(str),
        error: (str: string) => logger.error(str),
        fatal: (str: string) => logger.fatal(str)
    }
}