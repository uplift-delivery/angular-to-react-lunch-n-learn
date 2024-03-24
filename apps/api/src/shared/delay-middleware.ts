import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';
import { delayRequest } from './delay-request';

const DEFAULT_REQUEST_DELAY = 1000;

export function delayMiddleware() {
  return async (_: Request, __: Response, next: NextFunction) => {
    logger.info('delaying request', { delay: DEFAULT_REQUEST_DELAY });
    await delayRequest(DEFAULT_REQUEST_DELAY);
    return next();
  };
}
