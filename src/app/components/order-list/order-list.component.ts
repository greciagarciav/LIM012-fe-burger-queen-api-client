import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from "../../services/orders/orders.service";
import { Order } from 'src/app/model/order';
import { Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  showMoveButton: boolean = false;
  showCancelButton: boolean = false;
 @Input() statusOrder: string;

  constructor(private orders$:OrdersService, private router: Router) { }

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
    this.showHideButtons();
  }

  showHideButtons(){
    this.showMoveButton = this.router.url == '/mesero/states' && (this.statusOrder == 'pending'|| this.statusOrder == 'delivering');
    this.showCancelButton = this.router.url == '/mesero/states' && this.statusOrder == 'pending';
  }

  changeStatus(order:any) {
    if (order.status == 'pending') {
      order.status = 'delivering';
    } else if (order.status == 'delivering') {
      order.status = 'delivered';
    }
    this.orders$.updateOrder(order, order.id).subscribe()
  }

  removeOrder(order: any) {
    this.orders$.deleteOrder(order.id).subscribe()
  }
}
