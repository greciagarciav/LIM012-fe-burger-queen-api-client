import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaffComponent } from './view-staff.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewStaffComponent', () => {
  let component: ViewStaffComponent;
  let fixture: ComponentFixture<ViewStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaffComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
