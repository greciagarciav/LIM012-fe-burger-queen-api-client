
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrderListComponent } from './order-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { RouterTestingModule } from '@angular/router/testing';

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

});
