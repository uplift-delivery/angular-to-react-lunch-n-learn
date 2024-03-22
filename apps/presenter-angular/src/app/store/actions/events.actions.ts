import { createAction, props } from '@ngrx/store';
import { EventModel } from '@uplift-lunch-n-learn/models';

export const createNewEvent = createAction(
  '[EVENT] Create New EVENT',
  props<{ name: string; location: string; date: Date | string }>()
);
export const addNewEvent = createAction(
  '[EVENT] Add EVENT',
  props<{ event: EventModel }>()
);

export const loadAllEvents = createAction('[EVENT] Load All EVENT');

export const setAllEvents = createAction(
  '[EVENT] Set All EVENT',
  props<{ events: EventModel[] }>()
);
