import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-order-send',
  templateUrl: './order-send.component.html',
  styleUrls: ['./order-send.component.scss']
})
export class OrderSendComponent implements OnInit {
  products = [];
  total: number;
  public userId: string = '';
  public clientName: string = '';
  public objProd: any;

  constructor(private orders$ : OrdersService) { }

  ngOnInit(): void {
    this.orders$.buttonAddClickEventTrack.subscribe(event => {
      this.objProd = this.orders$.getObjectOrderProduct();
      const objProduct = this.objProd;
      if (objProduct.qty == undefined) { 
      objProduct.qty = 1;
      this.products.push(objProduct);
      this.totalBill();
      }
    });
  }

  plus(id: string) {
    this.products.filter(obj => obj.id == id)[0].qty += 1;
    this.totalBill();
  }

  minus( id: string) {
    const qtyActual = this.products.filter(obj => obj.id == id)[0].qty;
    if(qtyActual > 1) {
      this.products.filter(obj => obj.id == id)[0].qty -= 1;
    }
    this.totalBill();
  }

  trash(id: string) {
    const index = this.products.findIndex(item => item.id == id);
    this.products.splice(index, 1);
    this.totalBill();
  }

  createOrderFood() {
    const arrayProducts = this.products.map(product => {
      const productObj = {
        _id : product.id,
        price : product.price,
        name : product.prod
      };

      const arrayProduct = {
        product: productObj,
        qty: product.qty,
      };
      return arrayProduct;
    });

    const orderTotal = {
      userId: this.userId,
      client: this.clientName,
      products: arrayProducts,
      status: "pending",

     };

    return orderTotal;
  }

  sendOrder() {
    console.log('enviar orden');
    this.orders$.postOrder(this.createOrderFood()).subscribe((data: any) => {
      console.log(data.body);
    });
    this.cleanList();
  }

  cleanList() {
    console.log('limpiar orden');
    this.products = [];
  }

  totalBill() {
    this.total = this.products.reduce((acc, obj) => acc + (obj.price * obj.qty), 0);
  }
}
