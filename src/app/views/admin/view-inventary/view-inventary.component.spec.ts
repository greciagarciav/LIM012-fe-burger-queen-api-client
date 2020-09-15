import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventaryComponent } from './view-inventary.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from 'src/app/services/products.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ViewInventaryComponent', () => {
  let component: ViewInventaryComponent;
  let fixture: ComponentFixture<ViewInventaryComponent>;
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

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
        HttpClientTestingModule
      ],
      providers:[ProductsService],
      declarations: [ ViewInventaryComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addProduct, post product', () => {
    expect(component.form.valid).toBeFalsy();
    const newProduct = {
      "name": component.form.controls['name'].setValue('papitas'),
      "price": component.form.controls['price'].setValue(7),
      "image": component.form.controls['image'].setValue('papitas.png'),
      "type": component.form.controls['type'].setValue('acompañamiento'),
      "dataEntry": component.form.controls['dateEntry'].setValue('22/09/2019')
    };
    expect(component.form.valid).toBeTruthy();
    const data = [
      {
      "name": 'papitas',
      "price": 7,
      "image": 'papitas.png',
      "type": 'acompañamiento',
      "dataEntry": '22/09/2019'
      }
    ];
    component.addProduct();
    component.form.reset();
    component.confirmation = false;
  });

  it('editProduct', () => {
    const newProduct = {
      "name": component.form.controls['name'].setValue('papitas'),
      "price": component.form.controls['price'].setValue(7),
      "image": component.form.controls['image'].setValue('papitas.png'),
      "type": component.form.controls['type'].setValue('acompañamiento'),
      "dataEntry": component.form.controls['dateEntry'].setValue('22/09/2019')
    }
    component.editProduct(newProduct);
    component.editProp = true;
    component.productId = '12';
    component.productImg = 'papas.png';
    component.form.patchValue({
      name: 'papas',
      price: 7
    });
  });

  it('saveEdition', () => {
    component.productId = '12';
    component.editProp = true;
    component.saveEdition();
  });
});
