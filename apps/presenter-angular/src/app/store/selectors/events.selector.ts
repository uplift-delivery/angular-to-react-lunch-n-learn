import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventsAdapter, EventsState } from '../models/state.model';

const eventsFeature = createFeatureSelector<EventsState>('events');
export const selectors = eventsAdapter.getSelectors();
export const selectAllEvents = createSelector(
  eventsFeature,
  selectors.selectAll
);
