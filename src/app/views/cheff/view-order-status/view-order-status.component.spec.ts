import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderStatusComponent } from './view-order-status.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewOrderStatusComponent', () => {
  let component: ViewOrderStatusComponent;
  let fixture: ComponentFixture<ViewOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderStatusComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
