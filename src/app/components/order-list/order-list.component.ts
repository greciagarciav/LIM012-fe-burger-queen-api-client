import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from "../../services/orders/orders.service";
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
 @Input() statusOrder: string;
  // filterStatus: string = this.statusOrder;

  constructor(private orders$:OrdersService) { }

  getOrders() {
    this.orders$.getListOrders().subscribe((data: Order[])=>{
      console.log(data);
     this.orders =  data;
    })
  }

  moveOrder(order) {

    this.orders$.updateOrder(order).subscribe((data: any) => {
      console.log('data - edit-order', data);
    })
  }

  removeOrder(order) {
    this.orders$.deleteOrder(order.id).subscribe((response: any) => {
      this.orders = this.orders.filter(e => e.id !== order);
      console.log(response.status);
    })
    console.log(order);
  }

  ngOnInit(): void {
    this.getOrders();
  }

  // filterStatus(status: string) {
  //   switch (status) {
  //     case 'pending':
  //       this.filterOrder = 'pending';
  //       break;
  //     case 'delivering':
  //       this.filterOrder = 'delivering';
  //       break;
  //     case 'delivered':
  //       this.filterOrder = 'delivered';
  //       break;
  //     default:
  //       this.filterOrder = status;
  //       break;
  //   }
  // }
}
