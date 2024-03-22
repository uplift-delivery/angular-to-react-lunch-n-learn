import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel, PagedResultModel } from '@uplift-lunch-n-learn/models';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  configUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) {}
  getEvents(): Observable<PagedResultModel<EventModel>> {
    return this.http.get<PagedResultModel<EventModel>>(
      `${this.configUrl}/events`
    );
  }

  createEvent(
    name: string,
    location: string,
    date: string
  ): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.configUrl}/events`, {
      name,
      location,
      date,
    });
  }
}
