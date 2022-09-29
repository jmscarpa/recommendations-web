import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasAccess =!!localStorage.email;

    if (hasAccess) {
      return true
    } else {
      alert('Você não pode acessar esta página');
      this.router.navigateByUrl('/login')
      return false
    }
  
  }

}