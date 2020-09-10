import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  ;
  public url: string = environment.apiUrl
 private userSubject : BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('usuario'));
  user : Observable<any>= this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    // this.url = environment.apiUrl;
    // this.userSubject = new BehaviorSubject<any>(localStorage.getItem('usuario'));
    // this.user = this.userSubject.asObservable();
  }

  get refresh$() {
    return this.userSubject;
  }

  postUserLogin(body: object): Observable<any> {
    return this.http.post(`${this.url}auth`, body, { observe: 'response' })
      .pipe(map(userLogged => {
        localStorage.setItem('usuario', userLogged['token']);
        this.userSubject.next(body);
          return userLogged;
      }))
  }

}
