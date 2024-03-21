import { Route } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'events', component: EventsComponent },
  { path: '', component: HomeComponent },
];
