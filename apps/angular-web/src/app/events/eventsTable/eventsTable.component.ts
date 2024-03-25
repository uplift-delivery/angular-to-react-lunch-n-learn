import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadAllEvents } from '../../store/actions/events.actions';
import { selectAll } from '../../store/selectors/events.selector';

@Component({
  standalone: true,
  imports: [MatTableModule, DatePipe],
  selector: 'app-events-table',
  templateUrl: './eventsTable.component.html',
  styleUrl: './eventsTable.component.css',
})
export class EventsTableComponent implements OnInit {
  readonly displayedColumns: string[] = ['name', 'location', 'date'];
  readonly dataSource$ = this.store.select(selectAll);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadAllEvents());
  }
}
