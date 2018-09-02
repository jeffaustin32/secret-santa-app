import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  public errorMessage: string;

  constructor(public navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
    this.authService.error.subscribe((err: HttpErrorResponse) => {
      if (!err) {
        this.errorMessage = null;
        return;
      }

      switch (err.status) {
        case 400:
          this.errorMessage = 'Missing a required login parameter';
          break;
        case 401:
          this.errorMessage = 'Incorrect username or password';
          break;
        default:
          this.errorMessage = 'An error occured while trying to login';
      }
    });

    this.authService.user.subscribe((user: User) => {
      console.log('test');
      if (!user) {
        console.log('No user');
        return;
      }

      console.log(`User: ${user.firstName}`);
      this.navCtrl.push(TabsPage);
    });
  }

  onLoginClick(username: string, password: string) {
    this.authService.login(username, password);
  }

}
