import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('OrderService call http', () => {
    let service: OrdersService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [OrdersService],
        imports: [HttpClientTestingModule]
       });
      service = TestBed.inject(OrdersService);
    });
  });

  afterEach(() => {
    service = null;
  });

  const data = [
    {
    "id": "123",
      "userId": "456",
      "client": "Alba1",
      "products": [
        {
          "qty": 1,
          "product": {
            "_id": "141",
            "name": "sandwich",
            "price": 10,
            "image": "string",
            "type": "k",
            "dateEntry": "Date",
            "id": "7mISVcA"
          }
        },
        {
          "qty": 1,
          "product": {
            "_id": "141",
            "name": "sandwich",
            "price": 10,
            "image": "string",
            "type": "k",
            "dateEntry": "Date",
            "id": "7mISVcA"
          }
        }
      ],
      "status": "pending",
      "dateEntry": "Date"
    },
    {
      "id": "234",
      "userId": "456",
      "client": "Alba2",
      "products": [
        {
          "qty": 1,
          "product": {
            "_id": "141",
            "name": "string",
            "price": 1,
            "image": "string",
            "type": "k",
            "dateEntry": "Date",
            "id": "7mISVcA"
          }
        }
      ],
      "status": "delivering",
      "dateEntry": "Date"
    },
    {
      "id": "456",
      "userId": "456",
      "client": "Alba3",
      "products": [
        {
          "qty": 1,
          "product": {
            "_id": "141",
            "name": "string",
            "price": 1,
            "image": "string",
            "type": "k",
            "dateEntry": "Date",
            "id": "7mISVcA"
          }
        }
      ],
      "status": "delivered",
      "dateEntry": "Date"
    }
  ];

  let serviceSpy: any;

  it('should return list of orders', () => {
    serviceSpy = spyOn(service, 'getListOrders').and.returnValue(of(data));
    service.getListOrders()
    .subscribe(( resp: any ) => {
      expect(resp).toEqual(data);
    });
  });

});
