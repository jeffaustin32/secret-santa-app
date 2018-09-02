import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../../../shared/services/events.service';
import { ExchangeEvent } from '../../../../shared/models/exchange-event.model';
import { User } from '../../../../shared/models/user.model';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage implements OnInit {
  public event: ExchangeEvent;
  public users: User[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: EventService) { }

  ngOnInit() {
    this.event = this.navParams.data;
    this.eventService.getEventUsers(this.event.id)
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
      });
  }

}