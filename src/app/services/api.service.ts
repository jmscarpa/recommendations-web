import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string, params?: any): Promise<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}/${url}`, { params }).toPromise()
  }

  public post<T>(url: string, payload: any): Promise<T> {
    return this.httpClient.post<T>(`${environment.apiUrl}/${url}`, payload).toPromise()
  }

  public delete<T>(url: string): Promise<T> {
    return this.httpClient.delete<T>(`${environment.apiUrl}/${url}`).toPromise()
  }
}