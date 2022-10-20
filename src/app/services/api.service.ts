import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public get<T>(path: string, params: object = {}): Promise<T> {
    return this.httpClient
      .get<T>(`${environment.apiUrl}${path}`, this.getOptions(params))
      .toPromise();
  }

  public post<T>(path: string, body: object = {}): Promise<T> {
    return this.httpClient
      .post<T>(`${environment.apiUrl}${path}`, body, this.getOptions({}))
      .toPromise();
  }

  public patch<T>(path: string, body: object = {}): Promise<T> {
    return this.httpClient
      .patch<T>(`${environment.apiUrl}${path}`, body, this.getOptions({}))
      .toPromise();
  }

  public delete<T>(path: string): Promise<T> {
    return this.httpClient
      .delete<T>(`${environment.apiUrl}${path}`, this.getOptions({}))
      .toPromise();
  }

  private getOptions(params: object): object {
    const headers: object = {
      'Content-Type': 'application/json',
      Authorization: '',
    };

    if (this.authService.isLoggedIn()) {
      headers['Authorization'] = this.authService.currentUser.api_token;
    }

    return {
      headers,
      params,
    };
  }
}
