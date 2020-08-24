import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-order-send',
  templateUrl: './order-send.component.html',
  styleUrls: ['./order-send.component.scss']
})
export class OrderSendComponent implements OnInit {
  // products: Product[];
  total: number;
  public userId: string = '';
  public clientName: string = '';
  public objProd: any;

  constructor(private orders$ : OrdersService) { }

  ngOnInit(): void {
    this.totalBill();
    this.orders$.buttonAddClickEventTrack.subscribe(event => {
    this.products.push(this.objProd = this.orders$.getObjectOrderProduct());
    })
  }

  plus(id: string) {
    console.log('agregar');
    this.products.filter(obj => obj.id == id)[0].id += 1;
  }

  minus( id: string) {
    console.log('restar');
    const qtyActual = this.products.filter(obj => obj.id == id)[0].qty;
    if(qtyActual > 1) {
      this.products.filter(obj => obj.id == id)[0].qty -= 1;
    }
  }

  trash(id: string) {
    console.log('borrar item');
    const index = this.products.findIndex(item => item.id == id);
    this.products.splice(index, 1);
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
    })
    // this.products.push({id: '4', prod: localStorage.getItem('productName'), qty: 1, price: 3})
  }

  cleanList() {
    console.log('limpiar orden');
    this.products = [];
  }


  products = [
    // {id: '5', prod: 'jugo', qty: 1, price: 7},
    // {id: '2', prod: 'sandwich', qty: 2, price: 14},
    // {id: '3', prod: 'papas', qty: 3, price: 3},
  ];

  totalBill() {
    this.total = this.products.reduce((acc, obj) => acc + (obj.price * obj.qty), 0);
  }
}
