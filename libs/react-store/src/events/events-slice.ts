import { createSlice } from '@reduxjs/toolkit';
import { eventsAdapter } from './events-adapter';
import { eventsApi } from './events-api';

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(eventsApi.endpoints.getEvents.matchFulfilled, (s, a) => {
        eventsAdapter.upsertMany(s, a.payload.items);
      })
      .addMatcher(eventsApi.endpoints.getEventById.matchFulfilled, (s, a) => {
        eventsAdapter.upsertOne(s, a.payload);
      })
      .addMatcher(eventsApi.endpoints.deleteEvent.matchFulfilled, (s, a) => {
        eventsAdapter.removeOne(s, a.meta.arg.originalArgs);
      })
      .addMatcher(eventsApi.endpoints.updateEvent.matchFulfilled, (s, a) => {
        const originalArgs = a.meta.arg.originalArgs;
        const current = s.entities[originalArgs.id];
        eventsAdapter.upsertOne(s, { ...current, ...originalArgs });
      }),
});

export const EventsActions = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
export type EventsState = ReturnType<typeof eventsReducer>;
export const { selectAll: selectAllEvents, selectById: selectEventById } =
  eventsAdapter.getSelectors((state: { events: EventsState }) => state.events);
export const EVENTS_INITIAL_STATE = eventsAdapter.getInitialState();
