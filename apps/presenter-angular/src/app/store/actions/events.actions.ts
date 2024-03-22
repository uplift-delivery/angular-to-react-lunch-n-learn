import { createAction, props } from '@ngrx/store';
import { EventModel } from '@uplift-lunch-n-learn/models';

export const addNewEvent = createAction(
  '[EVENT] Add EVENT',
  props<{ event: EventModel }>()
);

export const setAllEvents = createAction(
  '[EVENT] Set All EVENT',
  props<{ events: EventModel[] }>()
);
