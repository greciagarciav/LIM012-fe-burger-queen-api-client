import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffComponent } from './cheff.component';

describe('CheffComponent', () => {
  let component: CheffComponent;
  let fixture: ComponentFixture<CheffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
