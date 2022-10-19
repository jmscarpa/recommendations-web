import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@gmail.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
  });

  public login(): void {
    if (this.form.valid) {
      const url = `${environment.apiUrl}/sessions`;
      this.httpClient
        .post<UserModel>(url, this.form.value)
        .toPromise()
        .then((data) => {
          this.authService.login(data);
        })
        .catch((response) => {
          alert(response.error.error);
        });
    }
  }
}
