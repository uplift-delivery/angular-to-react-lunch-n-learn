import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EventsService } from '../../services/events.service';
import { EventModel } from '@uplift-lunch-n-learn/models';

@Component({
  standalone: true,
  imports: [MatTableModule, DatePipe],
  selector: 'app-events-table',
  templateUrl: './eventsTable.component.html',
  styleUrl: './eventsTable.component.css',
})
export class EventsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'location', 'date'];
  dataSource: EventModel[] = [];
  constructor(private eventsService: EventsService) {}
  ngOnInit(): void {
    this.GetEvents();
  }

  GetEvents(): void {
    this.eventsService
      .getEvents()
      .subscribe((response) => (this.dataSource = response.items));
  }
}
