import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public isLoggedIn(): boolean {
    return !!localStorage.user;
  }

  public get currentUser(): UserModel {
    return JSON.parse(localStorage.user);
  }

  public login(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('');
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
