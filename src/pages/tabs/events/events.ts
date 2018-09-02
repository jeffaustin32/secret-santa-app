import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { EventPage } from './event/event';
import { EventService } from '../../../shared/services/events.service';
import { ExchangeEvent } from '../../../shared/models/exchange-event.model';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage implements OnInit {
  public events: ExchangeEvent[];

  constructor(public navCtrl: NavController, public eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: ExchangeEvent[]) => {
      this.events = events;
      console.log(events);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  public onEventClick(event: ExchangeEvent): void {
    console.log(event);
    this.navCtrl.push(EventPage, event);
  }
}
