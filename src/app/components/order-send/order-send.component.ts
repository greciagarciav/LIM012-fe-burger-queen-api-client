import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-send',
  templateUrl: './order-send.component.html',
  styleUrls: ['./order-send.component.scss']
})
export class OrderSendComponent implements OnInit,OnDestroy {
  products = [];
  total: number;
  form: FormGroup;
  confirmation: boolean = false;
  public user: any = JSON.parse(localStorage.getItem(('usuario')));
  public objProd: any;
  public orderTotal: any;
  public productsProduct: any;
  public productQty: any;
  public arrayProducts: any;
  orderSuscription: Subscription=null;
  orderSendSuscription: Subscription=null;

  constructor(private orders$ : OrdersService) { }

  ngOnInit(): void {
    this.listenAddProduct();
    this.buildForm();
  }

  listenAddProduct() {
    this.orderSuscription = this.orders$.buttonAddClickEventTrack.subscribe(event => {
      this.objProd = this.orders$.getObjectOrderProduct();
      let exist = this.products.some(item => item._id == this.objProd._id);
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
    this.arrayProducts = this.products.map(product => {
      this.productsProduct = {
        productId: product._id,
        qty: product.qty
      };
      return this.productsProduct;
    });

    this.orderTotal = {
      userId: this.user.id,
      client: this.form.value.client,
      products: this.arrayProducts,
     };

    return this.orderTotal;
  }

  sendOrder() {
    if(this.form.valid) {
      this.orderSendSuscription = this.orders$.postOrder(this.createOrderFood()).subscribe((data: any) => {
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

  ngOnDestroy(): void {
    this.orderSuscription.unsubscribe();
    if( this.orderSendSuscription){
      this.orderSendSuscription.unsubscribe();
     }
  }

}
