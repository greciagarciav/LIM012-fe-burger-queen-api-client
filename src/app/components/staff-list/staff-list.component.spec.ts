import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffList } from './staff-list.component';

describe('StaffList', () => {
  let component: StaffList;
  let fixture: ComponentFixture<StaffList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
