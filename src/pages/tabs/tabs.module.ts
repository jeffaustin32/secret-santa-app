import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { EventsPageModule } from './events/events.module';
import { InvitesPageModule } from './invites/invites.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    EventsPageModule,
    InvitesPageModule
  ],
})
export class TabsPageModule {}
