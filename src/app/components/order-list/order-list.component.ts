import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OrdersService } from "../../services/orders/orders.service";
import { Order } from 'src/app/model/order';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit,OnDestroy {
  orders: Order[];
  showMoveButton: boolean = false;
  showCancelButton: boolean = false;
 @Input() statusOrder: string;
  orderSuscription: Subscription;
  orderUpdateSuscription: Subscription;
  orderDeleteSuscription: Subscription;

  constructor(private orders$:OrdersService, private router: Router) { }

  getOrders() {
   this.orderSuscription= this.orders$.getListOrders().subscribe((data: Order[])=>{
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

  changeStatus(order:Order) {
    if (order.status == 'pending') {
      order.status = 'delivering';
    } else if (order.status == 'delivering') {
      order.status = 'delivered';
    }
    this.orderUpdateSuscription= this.orders$.updateOrder(order).subscribe()
  }

  removeOrder(order: Order) {
    this.orderDeleteSuscription= this.orders$.deleteOrder(order.id).subscribe()
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
    
    this.orderSuscription.unsubscribe();

    (this.orderUpdateSuscription)?this.orderUpdateSuscription.unsubscribe():null;
    (this.orderDeleteSuscription)?this.orderDeleteSuscription.unsubscribe():null
  }

}
