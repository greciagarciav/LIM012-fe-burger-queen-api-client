import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http: HttpClient) { }

  url: string = environment.apiUrl;
  private _refreshList$ = new Subject<void>();
  public refreshList$ = this._refreshList$.asObservable();

  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 2635645',
      'Content-Type': 'application/json'
    });

    getListOrders(){
      return this.http.get(`${this.url}orders`, { headers: this.headers });
    }

    postOrder(order: object){
      return this.http.post(`${this.url}orders`, order, { headers: this.headers });
    }

    updateOrder(order: any) {
      return this.http.put(`${this.url}orders/${order.id}`, order, { headers: this.headers, observe : 'response' })
    }

    deleteOrder(id: string) {
      return this.http.delete(`${this.url}orders/${id}`, { headers: this.headers });
    }
}
