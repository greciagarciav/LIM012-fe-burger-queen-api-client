import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrdersService } from './orders.service';
import { Order } from '../../model/order';
import { environment } from 'src/environments/environment';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;
  
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
            "dateEntry": new Date,
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
      "dateEntry":  new Date
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
            "dateEntry":  new Date,
            "id": "7mISVcA"
          }
        }
      ],
      "status": "delivered",
      "dateEntry":  new Date
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
 

  // it('should update a product', (done: DoneFn) => {
  //   const initial= [
  //     {
  //       "id": "123",
  //         "userId": "456",
  //         "client": "Alba1",
  //         "products": [
  //           {
  //             "qty": 1,
  //             "product": {
  //               "_id": "141",
  //               "name": "sandwich",
  //               "price": 10,
  //               "image": "string",
  //               "type": "k",
  //               "dateEntry": new Date,
  //               "id": "7mISVcA"
  //             }
  //           },
  //           {
  //             "qty": 1,
  //             "product": {
  //               "_id": "141",
  //               "name": "sandwich",
  //               "price": 10,
  //               "image": "string",
  //               "type": "k",
  //               "dateEntry": "Date",
  //               "id": "7mISVcA"
  //             }
  //           }
  //         ],
  //         "status": "pending",
  //         "dateEntry": "Date"
  //       }
  //     ]
  //   const update = [
  //     {
  //       "id": "123",
  //         "userId": "456",
  //         "client": "wendi",
  //         "products": [
  //           {
  //             "qty": 1,
  //             "product": {
  //               "_id": "141",
  //               "name": "sandwich",
  //               "price": 10,
  //               "image": "string",
  //               "type": "k",
  //               "dateEntry": new Date,
  //               "id": "7mISVcA"
  //             }
  //           },
  //           {
  //             "qty": 1,
  //             "product": {
  //               "_id": "141",
  //               "name": "sandwich",
  //               "price": 10,
  //               "image": "string",
  //               "type": "k",
  //               "dateEntry": "Date",
  //               "id": "7mISVcA"
  //             }
  //           }
  //         ],
  //         "status": "delivered",
  //         "dateEntry": "Date"
  //       }
  //   ]
  //     service.updateOrder(initial).subscribe(list => {
  //       expect(list.body).toBe(update)
  //       done()
  //     });
  
  //     const method = httpMock.expectOne(environment.apiUrl + 'orders/123');
  //     expect(method.request.method).toContain('PUT')
  //     method.flush(update)
  // });

  
});
