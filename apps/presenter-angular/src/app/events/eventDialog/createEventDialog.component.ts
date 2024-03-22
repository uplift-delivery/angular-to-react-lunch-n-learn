import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { EventsFormComponent } from '../eventsForm/eventsForm.component';
import { EventsService } from '../../services/events.service';
@Component({
  selector: 'app-create-event-dialog',
  templateUrl: 'createEventDialog.component.html',
  styleUrl: './createEventDialog.component.css',
  standalone: true,
  imports: [EventsFormComponent, MatDialogModule],
})
export class CreateEventDialogComponent {
  constructor(private eventsService: EventsService) {}

  createEvent = (name: string, location: string, date: string) => {
    this.eventsService.createEvent(name, location, date).subscribe();
  };
}
