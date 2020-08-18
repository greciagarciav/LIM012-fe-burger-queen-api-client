
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrderListComponent } from './order-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersService } from 'src/app/services/orders/orders.service';
// import { FilterOrderStatusPipe } from "src/app/pipes/filterstatus.pipe";
describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule
//       ],
//       declarations: [ OrderListComponent ],
//       providers:[OrdersService,FilterOrderStatusPipe]
//     })
//     .compileComponents();
//   }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ OrderListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers:[OrdersService]
    })
    .compileComponents();
  }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(OrderListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should get list of orders', () => {
//   //   let orderListComponent: OrderListComponent = new OrderListComponent();

//   //   const getListOrder = orderListComponent.getOrders();
//   // });
});
