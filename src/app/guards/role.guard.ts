import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userObject: any;
  constructor(private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    this.userObject = JSON.parse(localStorage.getItem('usuario'));
    if (this.userObject['role'] !== expectedRole) {
      this.router.navigate(['/mesero']);
      return false;
    }
    return true;
  }

}
