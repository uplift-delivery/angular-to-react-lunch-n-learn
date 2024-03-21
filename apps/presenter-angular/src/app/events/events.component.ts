import { Component } from '@angular/core';
import { EventsTableComponent } from './eventsTable/eventsTable.component';

@Component({
  standalone: true,
  imports: [EventsTableComponent],
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {}
