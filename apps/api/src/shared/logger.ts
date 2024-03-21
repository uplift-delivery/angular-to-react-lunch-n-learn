import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint({ colorize: true })
  ),
  transports: [new transports.Console()],
});
