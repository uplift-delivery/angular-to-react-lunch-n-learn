import { addNewEvent, setAllEvents } from '../actions/events.actions';
import { createReducer, on } from '@ngrx/store';
import { eventsAdapter } from '../models/state.model';

export const eventsReducer = createReducer(
  eventsAdapter.getInitialState(),
  on(addNewEvent, (state, { event }) => eventsAdapter.upsertOne(event, state)),
  on(setAllEvents, (state, { events }) => eventsAdapter.setAll(events, state))
);
