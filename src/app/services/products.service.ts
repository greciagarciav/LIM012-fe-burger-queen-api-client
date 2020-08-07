import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from '../model/products';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(public http: HttpClient) { }
  
  url:string= environment.apiUrl; 
  private countdownSource = new BehaviorSubject<any>(Product);
  public countdown$ = this.countdownSource.asObservable();


  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 2635645',
      'Content-Type': 'application/json'
    })

  getListProducts(): Observable<any> {
    return this.http.get(`${this.url}products`, { headers: this.headers });
  }

  postProduct(product:object): Observable<any> {
    return this.http.post(`${this.url}products`, product,{ headers: this.headers})
    .pipe(
      catchError(this.handleError),
    )
  }

  updateProduct(product: any) {
    return this.http.put(`${this.url}products/${product._id}`, product, { headers: this.headers, observe: 'response' })
    .pipe(
      catchError(this.handleError),
    )
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.url}products/${id}`)
    .pipe(
      catchError(this.handleError),
      
    )
  }

  handleError(errorRes: HttpErrorResponse) {
      return throwError({
        status: errorRes.status,
        statusText: errorRes.statusText,
        message: errorRes.message,
      })
  }
}
