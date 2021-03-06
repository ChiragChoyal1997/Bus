import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private customerService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.customerService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        [''], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}