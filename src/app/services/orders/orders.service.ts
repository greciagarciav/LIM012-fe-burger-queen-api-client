import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  user = JSON.parse(localStorage.getItem(('usuario')));
  public objectOrderProduct: object;
  token:string =JSON.parse(localStorage.getItem('usuario'));

  setObjectOrderProduct(product: object) {
    this.objectOrderProduct = product;
  }

  getObjectOrderProduct() {
    return this.objectOrderProduct;
  }

  constructor(public http: HttpClient) { }

  public url: string = environment.apiUrl + 'orders/';
  private subjectSource = new Subject<void>();
  public countdown$ = this.subjectSource.asObservable();

  public buttonAddClickEventTrack = new Subject();

  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    }
  );

  get refresh$() {
    return this.subjectSource;
  }

  getListOrders(){
    return this.http.get(`${this.url}`, { headers: { Authorization: `Bearer ${this.user.token}` } });
  }

  updateOrder(order: any, id: string) {
    return this.http.put(this.url + id, order, { headers: { Authorization: `Bearer ${this.user.token}` }})
    .pipe(
      tap(data => data),
      tap(() => {
        this.refresh$.next();
      })
    )
  }

  postOrder(order: object): Observable<any> {
    return this.http.post(this.url, (order), { headers: { Authorization: `Bearer ${this.user.token}` } })
      .pipe(
        tap(()=> {
          this.refresh$.next();
        })
      )
  }

  deleteOrder(id: string) {
    return this.http.delete(`${this.url}${id}`, { headers: { Authorization: `Bearer ${this.user.token}` } }).pipe(
      tap(() => {
        this.refresh$.next();
      })
    )
  }
}
