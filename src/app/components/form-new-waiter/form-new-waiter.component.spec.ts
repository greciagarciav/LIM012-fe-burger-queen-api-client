import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewWaiterComponent } from './form-new-waiter.component';

describe('FormNewWaiterComponent', () => {
  let component: FormNewWaiterComponent;
  let fixture: ComponentFixture<FormNewWaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewWaiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
