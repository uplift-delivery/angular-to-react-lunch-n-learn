import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import { createEventsRouter } from './events/create-events-router';
import { loggerMiddleware } from './shared/logger-middleware';
import { logger } from './shared/logger';
import { createHealthRouter } from './health/create-health-router';
import { delayMiddleware } from './shared/delay-middleware';

const app = express();
const port = process.env.PORT || 5001;

logger.info('starting api', { port });
app.use(loggerMiddleware());
app.use(delayMiddleware());
app.use(cors());
app.use(bodyParser.json());
app.use('/events', createEventsRouter());
app.use('/.health', createHealthRouter());

export const server = createServer(app);
server.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}`);
});
server.on('error', logger.error);
