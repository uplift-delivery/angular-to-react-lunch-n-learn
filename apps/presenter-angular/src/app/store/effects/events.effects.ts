import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setAllEvents } from '../actions/events.actions';
import { Store } from '@ngrx/store';
import { EventsService } from '../../services/events.service';
import { exhaustMap } from 'rxjs';
import { map } from 'zod';

@Injectable()
export class EventsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly eventsService: EventsService
  ) {}

  // loadAllEvents$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(setAllEvents),
  //       this.eventsService.getEvents().pipe(
  //           map((results) => setAllEvents({events: results.items}))
  //         )
  //       )
  // });
}
