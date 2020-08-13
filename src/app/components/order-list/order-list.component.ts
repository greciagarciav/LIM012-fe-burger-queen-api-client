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

  constructor(private orders$:OrdersService) { }

  getOrders() {
    this.orders$.getListOrders().subscribe((data: Order[])=>{
     this.orders = data;
    });
  }

  ngOnInit(): void {
    this.orders$.refresh$.subscribe(() => {
      this.getOrders();
    });
    this.getOrders();
  }

  changeStatus(order:any) {
    console.log('1', order.status);
    if (order.status == 'pending') {
      order.status = 'delivering';
    } else if (order.status == 'delivering') {
      order.status = 'delivered';
    }
    this.orders$.updateOrder(order).subscribe((data: any) => {
      console.log('data - edit-order', data);
    })
  }
}
