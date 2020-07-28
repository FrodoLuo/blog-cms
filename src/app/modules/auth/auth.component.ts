import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    private userService: UserService
  ) {}

  public submit(email: string, password: string) {
    this.userService.requestLogIn(email, password);
    return;
  }
}
