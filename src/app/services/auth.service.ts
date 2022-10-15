import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router){}

  public isLoggedIn(): boolean {
    return !!localStorage.email;
  }

  public get currentUser(): string {
    return localStorage.email;
  }

  public login(email: string): void {
    localStorage.setItem('email', email)
    this.router.navigateByUrl('')
  }

  public logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

}