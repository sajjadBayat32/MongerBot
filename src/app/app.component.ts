import { Component } from '@angular/core';
import {AccountService} from "./_services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MongerBotMainUi';

  constructor(public service: AccountService) {
  }

  login() {
    this.service.authenticate().subscribe(
      data => {
        this.service.user.jwt = data['jwtToken']
      }
    )
  }
}
