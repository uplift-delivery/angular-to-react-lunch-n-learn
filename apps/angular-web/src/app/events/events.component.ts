import { Component } from '@angular/core';
import { EventsTableComponent } from './eventsTable/eventsTable.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateEventDialogComponent } from './eventDialog/createEventDialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [EventsTableComponent, MatButtonModule, CreateEventDialogComponent],
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(public dialog: MatDialog) {}
  openCreateDialog(): void {
    this.dialog.open(CreateEventDialogComponent);
  }
}
