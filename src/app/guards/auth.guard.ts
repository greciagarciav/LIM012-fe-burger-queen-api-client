import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
userObject: any;
constructor( private router: Router){

}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userObject = JSON.parse(localStorage.getItem('usuario'));
      if(this.userObject == undefined) {
        this.router.navigate(['/']);
          return false;
      }
      return true;
  }
}
