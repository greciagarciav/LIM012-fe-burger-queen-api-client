import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaitersComponent } from './view-waiters.component';

describe('ViewWaitersComponent', () => {
  let component: ViewWaitersComponent;
  let fixture: ComponentFixture<ViewWaitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWaitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWaitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
