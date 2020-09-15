import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { OrderSendComponent } from './order-send.component';
import { OrdersService } from '../../services/orders/orders.service';


describe('OrderSendComponent', () => {
  let component: OrderSendComponent;
  let fixture: ComponentFixture<OrderSendComponent>;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  afterAll(() => {
    localStorage.removeItem('usuario');
  });

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

  it('createOrderFood, build upd the order', () => {
    component.products = [{ _id: "1", name: "café", price: 7, qty: 1 }, { _id: "2", name: "leche", price: 7, qty: 1 }]
    component.productsProduct = {_id: '1', price: 7, name: 'café'};
    component.productQty = {product: component.productsProduct, qty: 1}
    component.user = 'test@test.com';
    component.form.controls['client'].setValue('grecia');
    component.createOrderFood();
    const objOrder = {
      userId: component.user.id,
      client: 'grecia',
      products: component.arrayProducts,
      // status: 'pending'
    };
    expect(component.orderTotal).toEqual(objOrder);
  });

  it('should send order', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    component.form.controls['client'].setValue('grecia');
    component.products = [{ id: "1", name: "café", price: 7, qty: 1 }, { id: "2", name: "leche", price: 7, qty: 1 }]
    component.productsProduct = {_id: '1', price: 7, name: 'café'};
    component.productQty = {product: component.productsProduct, qty: 1}
    component.user = 'test@test.com';
    component.createOrderFood();
    let OrderPosted;
    const objOrder = {
      user: component.user,
      client: 'grecia',
      products: component.arrayProducts,
      status: 'pending'
    };
    ordersService.postOrder(objOrder).subscribe((response) => {
      OrderPosted = response;
    });
    // http.expectOne('http://localhost:3000/orders').flush('postOrder');
    component.sendOrder();
    // expect(OrderPosted).toEqual('postOrder');
  });

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
