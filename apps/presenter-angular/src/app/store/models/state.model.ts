import { EventModel } from '@uplift-lunch-n-learn/models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

// eslint-disable-next-line
export interface EventsState extends EntityState<EventModel> {}

export const eventsAdapter = createEntityAdapter<EventModel>();
