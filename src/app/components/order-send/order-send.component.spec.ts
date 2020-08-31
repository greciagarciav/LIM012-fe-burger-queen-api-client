import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { OrderSendComponent } from './order-send.component';
import { OrdersService } from '../../services/orders/orders.service';


describe('OrderSendComponent', () => {
  let component: OrderSendComponent;
  let fixture: ComponentFixture<OrderSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSendComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [OrdersService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('totalBill, should get the total bill', () => {
    component.products = [{price: 7, qty: 2}, {price: 5, qty: 1}, {price: 3, qty: 2}];
    component.totalBill();
    expect(component.total).toBe(25);
  });

  it('cleanList, should clean all details of the order', () => {
    component.products = [{price: 7, qty: 2}, {price: 5, qty: 1}, {price: 3, qty: 2}];
    component.total = 25;
    component.cleanList();
    expect(component.total).toBe(0);
    expect(component.products).toEqual([ ]);
  });

  // it('should send order', () => {
  //   const ordersService = TestBed.inject(OrdersService);
  //   const http = TestBed.inject(HttpTestingController);
  //   let orderPosted;
  //   const objectOrder = {
  //     "user": "",
  //     "client": "grecia",
  //     "products": [
  //       {
  //         "product": {
  //           "_id": "122112",
  //           "price": "5",
  //           "name": "Café americano"
  //         },
  //         "qty": 3
  //       },
  //       {
  //         "product": {
  //           "_id": "56456",
  //           "price": "7",
  //           "name": "Café con leche"
  //         },
  //         "qty": 3
  //       },
  //       {
  //         "product": {
  //           "_id": "12333",
  //           "price": "7",
  //           "name": "Jugo de frutas natural"
  //         },
  //         "qty": 4
  //       }
  //     ],
  //     "status": "pending",
  //   };

  //   ordersService.postOrder(objectOrder).subscribe((response) => {
  //     orderPosted = response;
  //   });

  //   http.expectOne('http://localhost:3000/orders').flush('postOrder');
  //   component.sendOrder();
  //   expect(orderPosted).toEqual('postOrder');
  // });
  it('trash, should delete product from list', () => {
    component.products = [{id: '1', price: 7, qty: 2}, {id: '2', price: 5, qty: 1}, {id: '3', price: 3, qty: 2}];
    component.total = 25;
    component.totalBill();
    component.trash('2');
    const newProducts = [{id: '1', price: 7, qty: 2}, {id: '3', price: 3, qty: 2}];
    expect(component.total).toBe(20);
    expect(component.products).toEqual(newProducts);
  });

  it('should form invalid when empty',()=>{
    expect(component.form.valid).toBeFalsy()
    });

  it('should client field validity',()=>{
    let client = component.form.controls['client'];
    expect(client.valid).toBeFalsy();
    let errors = {};
    errors = client.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('subbmitting a form emits a client', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['client'].setValue('grecia');
    expect(component.form.valid).toBeTruthy();
    const clientAdd = component.form.value;
    component.createOrderFood();
    expect(clientAdd.client).toBe('grecia');
  });

  it('minus, should sustract quantity of product', () => {
    component.products = [{id: '1', price: 7, qty: 2}, {id: '2', price: 5, qty: 1}];
    const newQty = [{id: '1', price: 7, qty: 1}, {id: '2', price: 5, qty: 1}];
//when product quantity is more than 1
    component.minus('1');
    expect(component.total).toBe(12);
    expect(component.products).toEqual(newQty);
//when product quantity is 1
    component.minus('2');
    expect(component.total).toBe(12);
    expect(newQty).toEqual(newQty);
  });

  it('plus, should add quantity of product', () => {
    component.products = [{id: '1', price: 7, qty: 2}, {id: '2', price: 5, qty: 1}];
    const newQty = [{id: '1', price: 7, qty: 3}, {id: '2', price: 5, qty: 1}];
    component.plus('1');
    expect(component.total).toBe(26);
    expect(component.products).toEqual(newQty);
  });
});
