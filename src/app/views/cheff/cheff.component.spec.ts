import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffComponent } from './cheff.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheffComponent', () => {
  let component: CheffComponent;
  let fixture: ComponentFixture<CheffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports:[RouterTestingModule],
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
