import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrdersService } from './orders.service';
import { Order } from '../../model/order';
import { environment } from 'src/environments/environment';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  afterAll(() => {
    localStorage.removeItem('usuario');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setObjectOrderProduct', () => {
    const product =  {
      "_id": "141",
      "name": "sandwich",
      "price": 10,
      "image": "string",
      "type": "k",
      "dateEntry": new Date(),
      "id": "7mISVcA"
    };
    service.setObjectOrderProduct(product);
    const gety = service.getObjectOrderProduct();
    expect(gety).toBe(product);
  });

  it('should return list of orders', () => {
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
    serviceSpy = spyOn(service, 'getListOrders').and.returnValue(of(data));
    service.getListOrders()
      .subscribe(( resp: any ) => {
        expect(resp).toEqual(data);
      });
  });

  it('should add a new order', (done: DoneFn) => {
    const order =  [
      {
        "id": "123",
          "user": "456",
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
                "dateEntry": new Date(),
                "id": "7mISVcA"
              }
            }
          ],
          "status": "pending",
          "dateEntry":  new Date()
    }];
    const data = [
      {
      "id": "123",
        "user": "456",
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
              "dateEntry": new Date(),
              "id": "7mISVcA"
            }
          }
        ],
        "status": "pending",
        "dateEntry":  new Date()
      },
      {
        "id": "456",
        "user": "456",
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
              "dateEntry":  new Date(),
              "id": "7mISVcA"
            }
          }
        ],
        "status": "delivered",
        "dateEntry":  new Date()
      }
    ];

    service.postOrder(order).subscribe(list => {
      expect(list.length).toBeGreaterThan(0);
      expect(list).toEqual(data);
      done();
    });

    const method = httpMock.expectOne(environment.apiUrl + 'orders/');
    expect(method.request.method).toContain('POST')
    method.flush(data);
  });

  it('should update a product', (done: DoneFn) => {
    const initial = [
      {
        "id": "123",
          "user": "456",
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
                "dateEntry": new Date(),
                "id": "7mISVcA"
              }
            }
          ],
          "status": "pending",
          "dateEntry": new Date()
        }
      ]
    const update = [
      {
        "id": "123",
          "user": "456",
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
                "dateEntry": new Date(),
                "id": "7mISVcA"
              }
            }
          ],
          "status": "delivering",
          "dateEntry": new Date()
        }
    ];
    service.updateOrder(initial, '123').subscribe(list => {
      expect(list).toBe(update)
      done()
    });

    const method = httpMock.expectOne(environment.apiUrl + 'orders/123');
    expect(method.request.method).toContain('PUT');
    method.flush(update);
  });

  it('should delete an order from a list', (done: DoneFn) => {
    const final = [];
    service.deleteOrder('123').subscribe((resp:any) => {
      expect(resp).toBe(final);
      done();
    });

    const method = httpMock.expectOne(environment.apiUrl + 'orders/123');
    expect(method.request.method).toContain('DELETE');
    method.flush(final);
  });

});
