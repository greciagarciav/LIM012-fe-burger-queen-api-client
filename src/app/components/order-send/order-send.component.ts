import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-send',
  templateUrl: './order-send.component.html',
  styleUrls: ['./order-send.component.scss']
})
export class OrderSendComponent implements OnInit {
  products = [];
  total: number;
  form: FormGroup;
  confirmation: boolean = false;
  public userId: string = '';
  public objProd: any;

  constructor(private orders$ : OrdersService) { }

  ngOnInit(): void {
    this.listenAddProduct();
    this.buildForm();
  }

  listenAddProduct() {
    this.orders$.buttonAddClickEventTrack.subscribe(event => {
      this.objProd = this.orders$.getObjectOrderProduct();
      let exist = this.products.some(item => item.id == this.objProd.id);
      if (!exist) { 
        this.objProd.qty = 1;
        this.products.push(this.objProd);
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

  private buildForm() {
    this.form = new FormGroup({
      client: new FormControl('', [Validators.required])
    })
  }

  getClient() {
    return this.form.get('client');
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
        name : product.name
      };

      const arrayProduct = {
        product: productObj,
        qty: product.qty,
      };
      return arrayProduct;
    });

    const orderTotal = {
      user: this.userId,
      client: this.form.value.client,
      products: arrayProducts,
      status: "pending",
     };

    return orderTotal;
  }

  sendOrder() {
    if(this.form.valid) {
    this.orders$.postOrder(this.createOrderFood()).subscribe((data: any) => {
      this.form.reset();
      this.confirmation = false;
      this.cleanList();
    });
    } else {
      this.confirmation = true;
    }
  }

  cleanList() {
    this.total = 0;
    this.products = [];
  }

  totalBill() {
    this.total = this.products.reduce((acc, obj) => acc + (obj.price * obj.qty), 0);
  }
}
