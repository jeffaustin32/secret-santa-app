import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from './events/events';
import { InvitesPage } from './invites/invites';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabOne: any;
  tabTwo: any;

  constructor(public navCtrl: NavController) {
    this.tabOne = EventsPage;
    this.tabTwo = InvitesPage;
  }

}
