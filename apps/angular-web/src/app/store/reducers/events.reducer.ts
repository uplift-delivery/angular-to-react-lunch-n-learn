import { addNewEvent, setAllEvents } from '../actions/events.actions';
import { createFeature, createReducer, on } from '@ngrx/store';
import { eventsAdapter } from '../models/state.model';

export const eventsReducer = createReducer(
  eventsAdapter.getInitialState(),
  on(addNewEvent, (state, { event }) => eventsAdapter.upsertOne(event, state)),
  on(setAllEvents, (state, { events }) => eventsAdapter.setAll(events, state))
);

const feature = createFeature({ name: 'events', reducer: eventsReducer });
const { selectAll } = eventsAdapter.getSelectors(feature.selectEventsState);

export const eventsFeature = { ...feature, selectAll };
