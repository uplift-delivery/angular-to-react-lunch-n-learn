import { getDataSource } from '../shared/lunch-n-learn-data-source';
import { EventEntity } from './event-entity';

export async function eventsRepository() {
  const source = await getDataSource();
  return source.getRepository(EventEntity);
}
