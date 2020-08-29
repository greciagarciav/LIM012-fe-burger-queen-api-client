import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const userOnject = JSON.parse(localStorage.getItem('usuario'));
    if (userOnject['role'] !== expectedRole) {
      this.router.navigate(['/mesero']);
      return false;
    }
    return true;
  }

}
