import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addNewEvent,
  createNewEvent,
  loadAllEvents,
  setAllEvents,
} from '../actions/events.actions';
import { Store } from '@ngrx/store';
import { EventsService } from '../../services/events.service';
import { exhaustMap, map } from 'rxjs';
import { z } from 'zod';

@Injectable()
export class EventsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly eventsService: EventsService
  ) {}

  loadAllEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllEvents),
      exhaustMap(() => {
        return this.eventsService
          .getEvents()
          .pipe(map((results) => setAllEvents({ events: results.items })));
      })
    );
  });

  createNewEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createNewEvent),
      exhaustMap(({ name, location, date }) => {
        return this.eventsService
          .createEvent(name, location, date)
          .pipe(map((eventModel) => addNewEvent({ event: eventModel })));
      })
    );
  });
}
