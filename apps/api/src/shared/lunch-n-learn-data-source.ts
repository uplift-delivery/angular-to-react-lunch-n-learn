import { DataSource } from 'typeorm';
import path from 'path';
import { EventEntity } from '../events/event-entity';
import { WinstonDbLogger } from './winston-db-logger';

const LunchNLearnDataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(__dirname, '..', 'database', 'lunch-n-learn.db'),
  entities: [EventEntity],
  synchronize: true,
  logger: new WinstonDbLogger(),
});

export async function getDataSource(): Promise<DataSource> {
  if (LunchNLearnDataSource.isInitialized) {
    return LunchNLearnDataSource;
  }
  return await LunchNLearnDataSource.initialize();
}
