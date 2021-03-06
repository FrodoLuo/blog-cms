import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (this.userService.user$.getValue() !== null) {
      return true;
    }
    const user = await this.userService.fetchUser();
    if (user === null) {
      return this.router.navigateByUrl('/auth');
    } else {
      console.log(3333);
      return true;
    }
  }
}
