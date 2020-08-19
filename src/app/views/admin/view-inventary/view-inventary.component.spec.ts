import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventaryComponent } from './view-inventary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from 'src/app/services/products.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewInventaryComponent', () => {
  let component: ViewInventaryComponent;
  let fixture: ComponentFixture<ViewInventaryComponent>;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
