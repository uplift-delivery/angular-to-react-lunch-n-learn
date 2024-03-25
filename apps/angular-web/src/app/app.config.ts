import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { provideStore } from '@ngrx/store';
import { eventsReducer } from './store/reducers/events.reducer';
import { EventsEffects } from './store/effects/events.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'yyyy/MM/dd' },
    },
    provideHttpClient(),
    importProvidersFrom(MatDialogModule),
    provideStore({ events: eventsReducer }),
    provideEffects([EventsEffects]),
  ],
};
