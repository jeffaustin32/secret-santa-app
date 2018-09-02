import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiRes } from '../models/api-res.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ExchangeEvent } from '../models/exchange-event.model';

@Injectable()
export class EventService {
    public events = new BehaviorSubject<ExchangeEvent[]>(JSON.parse(localStorage.getItem('events')));
    public error = new Subject<HttpErrorResponse>();

    constructor(private http: HttpClient) { }

    public getEvents() {
        return this.http.get('http://localhost:3200/event/');
    }

    public getEventUsers(eventId: number) {
        return this.http.get(`http://localhost:3200/event/${eventId}/users`);
    }
}