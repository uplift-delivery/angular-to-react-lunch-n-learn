import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import { createEventsRouter } from './events/create-events-router';
import { loggerMiddleware } from './shared/logger-middleware';
import { logger } from './shared/logger';

logger.info('starting api');

const app = express();
const port = process.env.PORT || 5001;

app.use(loggerMiddleware());
app.use(cors());
app.use(bodyParser.json());
app.use('/events', createEventsRouter());

const server = createServer(app);
server.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}`);
});
server.on('error', logger.error);
