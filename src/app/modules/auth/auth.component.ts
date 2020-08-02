import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit() {
    if (this.userService.user$.getValue() != null) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  public submit(email: string, password: string) {
    this.userService.requestLogIn(email, password)
      .subscribe(
        res => {
          this.router.navigateByUrl('/dashboard');
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    return;
  }
}
