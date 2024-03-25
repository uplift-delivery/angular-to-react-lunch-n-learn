import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { EventsFormComponent } from '../eventsForm/eventsForm.component';
import { Store } from '@ngrx/store';
import { createNewEvent } from '../../store/actions/events.actions';
@Component({
  selector: 'app-create-event-dialog',
  templateUrl: 'createEventDialog.component.html',
  styleUrl: './createEventDialog.component.css',
  standalone: true,
  imports: [EventsFormComponent, MatDialogModule],
})
export class CreateEventDialogComponent {
  constructor(private store: Store) {}

  createEvent = (name: string, location: string, date: string) => {
    this.store.dispatch(createNewEvent({ name, location, date }));
  };
}
