import { Logger, QueryRunner } from 'typeorm';
import { logger } from './logger';
export class WinstonDbLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    logger.info('executed query', { query, parameters });
  }
  logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner
  ) {
    logger.info('query failed', { query, parameters, error });
  }
  logQuerySlow(
    time: number,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner
  ) {
    logger.warn('slow query', { query, parameters, time });
  }
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    logger.info('schema build', { message });
  }
  logMigration(message: string, queryRunner?: QueryRunner) {
    logger.info('migration', { message });
  }
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    logger[level]('db log', { message });
  }
}
