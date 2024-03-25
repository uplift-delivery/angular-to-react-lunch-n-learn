import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  selector: 'app-events-form',
  templateUrl: './eventsForm.component.html',
  styleUrl: './eventsForm.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EventsFormComponent {
  @Input() onSubmitAction:
    | ((name: string, location: string, date: string) => void)
    | undefined;

  fb = inject(FormBuilder);
  form = this.fb.group({
    name: [''],
    location: [''],
    date: [''],
  });

  onSubmit() {
    if (this.onSubmitAction) {
      const values = this.form.value;
      this.onSubmitAction(values.name!, values.location!, values.date!);
    }
  }
}
