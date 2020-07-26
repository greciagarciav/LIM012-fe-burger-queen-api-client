import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpErrorResponse,} from '@angular/common/http';
import { User } from './model/user'
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class JsonApiService {

  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 2635645',
      'Content-Type': 'application/json'
    })

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/users#'

  private _refreshList$ = new Subject<void>();

//   get refreshList$(){
//     return this._refreshList$;
// }
  refreshList$ = this._refreshList$.asObservable();

  getUser(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }

  postUser(user) {
    return this.http.post(this.url, (user), { headers: this.headers,observe: 'response'})
    .pipe( 
      // map(resp=>resp),
      // catchError(this.handleError)
      // tap(resp => resp)
      tap(() => {
          this._refreshList$.next();
      })
    );
  }

  handleError(errorRes: HttpErrorResponse) {
    if (errorRes.error instanceof ErrorEvent) { //boolean que da el tipo de error
      return throwError('Error: ' + errorRes.error.message)// error lado del cliente
    } else {
      return throwError({// error lado del servidor
        status: errorRes.status,
        statusText: errorRes.statusText,
        message: errorRes.message,
      })
    }
  }
}
//  deleteEmployed(url:string,id:any){
//   return this.http.delete(url,id,{})
// }
// }
