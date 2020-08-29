import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public url: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  postUserLogin(body: object): Observable<Object> {
    return this.http.post(`${this.url}auth`, body, { observe: 'response' });
  }

}
