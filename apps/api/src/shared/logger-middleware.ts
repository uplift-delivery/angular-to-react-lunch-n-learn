import { NextFunction, Request, Response } from 'express';
import { logger } from './logger';

export function loggerMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const startTime = new Date();
    logger.info('handling request...', { url: req.url, method: req.method });
    res.on('finish', () => {
      const duration = new Date().getTime() - startTime.getTime();
      logger.info('handled request', {
        url: req.url,
        method: req.method,
        status: res.statusCode,
        duration,
      });
    });
    next();
  };
}
