import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../model/products';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule //mockea el httpclient
      ],
      providers: [ProductsService]
    });
    //se inyecta la simulacion
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  //no deja simulaciones pendientes luego de la prueba
  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    const currentProd: Product[] = [
      {
        "id": '234',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      },
      {
        "id": '234',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      }
    ]

    let serviceSpy: any;
    serviceSpy = spyOn(service, 'getListProducts').and.returnValue(of(currentProd));
    service.getListProducts()
      .subscribe((resp: any) => {
        expect(resp).toEqual(currentProd);
      });
  });

  it('should get add a new product', (done: DoneFn) => {
    const product: Product[] = [
      {
        "id": '222',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      }]
    const dataPost: Product[] = [
      {
        "id": '222',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      },
      {
        "id": '333',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      }
    ]
    service.postProduct(product).subscribe(list => {
      expect(list.length).toBeGreaterThan(0);
      expect(list).toEqual(dataPost)
      done()
    });

    const method = httpMock.expectOne(environment.apiUrl + 'products/');
    //simula el obj de la solictud que deberia tener los mismos methodos
    expect(method.request.method).toContain('POST')
     // retorna info adicional, body de la peticion luego de una simulacion async
    method.flush(dataPost)

  });

  it('should update a product', (done: DoneFn) => {
    const initial: Product[] = [
      {
        "id": '234',
        "name": 'hamburguesa',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      }]
    const update: Product[] = [
      {
        "id": '234',
        "name": 'papitas',
        "price": 3,
        "image": ' string',
        "type": 'string',
        "dateEntry": new Date(),
      }]
      service.updateProduct(initial,'234').subscribe(list => {
        expect(list.body).toBe(update)
        done()
      });
  
      const method = httpMock.expectOne(environment.apiUrl + 'products/234');
      expect(method.request.method).toContain('PUT')
      method.flush(update)
  });

  it('should delete product of the list', () => {
    let serviceSpy: any;
    serviceSpy = spyOn(service, 'deleteProduct').and.returnValue(of({}));
    service.deleteProduct('234')
      .subscribe((resp: any) => {
        expect(resp).toEqual({});
      });
  });
  
});
