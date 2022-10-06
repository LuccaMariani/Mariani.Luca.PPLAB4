import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate, CanDeactivate<unknown> {
  public email: any;
  public usuario = { "mail": '' };
  public data: any;
  public res: any;
  
  constructor(private authService: AuthService, private router: Router) {


  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    await this.authService.whoIsLoggedIn().subscribe((usuario) => {
      if (usuario != null) {
        console.log('aaa', usuario.email)
        if (usuario.email != "admin@gmail.com") {
          this.router.navigateByUrl('bienvenida');
        }
        
      } else {
        this.router.navigateByUrl('bienvenida');
      }
    });

    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
