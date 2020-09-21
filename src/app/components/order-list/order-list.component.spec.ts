
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrderListComponent } from './order-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router} from '@angular/router';


import { filterPipe } from "src/app/pipes/filter.pipe";
describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

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
      imports: [
        HttpClientTestingModule, RouterTestingModule
      ],
      declarations: [ OrderListComponent ],
      providers:[OrdersService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ OrderListComponent, filterPipe ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers:[OrdersService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should buttons of move and cancel status', () => {
    component.showHideButtons();
    expect(component.showMoveButton).toBe(false);
    expect(component.showCancelButton).toBe(false);
  });

  it('changeStatus, create object to change order status', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    component.productsProduct = { product: {_id: '1', price: 7, name: 'café'}, qty: 1};
    component.arrayProducts = {
      _id: '1234',
      userId: '123456789',
      client: 'grecia',
      products: [
        {
          product: component.productsProduct
        }
      ],
      status: 'pending'
    };
    component.changeStatus(component.arrayProducts);
    component.orderEdit = {
      _id: '1234',
      userId: '123456789',
      client: 'grecia',
      products: component.arrayProducts,
      status: 'delivering'
    };
    ordersService.updateOrder(component.arrayProducts, '1234').subscribe((response) => {
      component.orderEdit = response;
      expect(response).toEqual(component.orderEdit);
    });
    component.changeStatus(component.orderEdit);
    component.orderEdit = {
      _id: '1234',
      userId: '123456789',
      client: 'grecia',
      products: component.arrayProducts,
      status: 'delivered'
    };
    ordersService.updateOrder(component.arrayProducts, '1234').subscribe((response) => {
      component.orderEdit = response;
      expect(response).toEqual(component.orderEdit);
    });
  });

  it('removeOrder, should delete an order', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    component.arrayProducts = {
      _id: '1234',
      userId: '123456789',
      client: 'grecia',
      products: [
        {
          product: component.productsProduct
        }
      ],
      status: 'pending'
    };
    component.removeOrder(component.arrayProducts);
    ordersService.deleteOrder(component.arrayProducts).subscribe((response) => {
      expect(response).toEqual([]);
    });
  });

});
