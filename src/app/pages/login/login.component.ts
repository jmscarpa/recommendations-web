import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  constructor(private authService: AuthService){}

  public login(): void {
    this.authService.login('joao.scarpa@gmail.com')
  }

}