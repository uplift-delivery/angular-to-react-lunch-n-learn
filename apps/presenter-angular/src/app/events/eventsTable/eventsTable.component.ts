import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EventModel } from '../../models/event.model';
import { DatePipe } from '@angular/common';

const TEST_DATA: EventModel[] = [
  { name: 'Jimmy', location: 'The Butcher Shop', date: new Date('2024-12-15') },
  { name: 'Jeremy', location: 'Stoner Theater', date: new Date('2025-08-05') },
  {
    name: 'Jessy',
    location: 'Temple of Performing Arts',
    date: new Date('2024-05-11'),
  },
];

@Component({
  standalone: true,
  imports: [MatTableModule, DatePipe],
  selector: 'app-events-table',
  templateUrl: './eventsTable.component.html',
  styleUrl: './eventsTable.component.css',
})
export class EventsTableComponent {
  displayedColumns: string[] = ['name', 'location', 'date'];
  dataSource = TEST_DATA;
}
