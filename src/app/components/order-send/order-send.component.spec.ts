import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderSendComponent } from './order-send.component';
import { OrdersService } from '../../services/orders/orders.service';


describe('OrderSendComponent', () => {
  let component: OrderSendComponent;
  let fixture: ComponentFixture<OrderSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSendComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
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
});
