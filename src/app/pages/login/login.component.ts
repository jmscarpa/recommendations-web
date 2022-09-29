import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  constructor(private router: Router){}

  public login(): void {
    localStorage.setItem('email', 'joao.scarpa@gmail.com')
    this.router.navigateByUrl('')
  }

  public logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

}