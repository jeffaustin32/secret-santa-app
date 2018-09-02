import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from '@angular/common/http';
import { EventService } from "./services/events.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
        EventService
    ]
})
export class SharedModule { }