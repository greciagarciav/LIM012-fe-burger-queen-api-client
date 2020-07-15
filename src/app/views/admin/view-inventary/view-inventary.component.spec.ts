import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventaryComponent } from './view-inventary.component';

describe('ViewInventaryComponent', () => {
  let component: ViewInventaryComponent;
  let fixture: ComponentFixture<ViewInventaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInventaryComponent ]
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
