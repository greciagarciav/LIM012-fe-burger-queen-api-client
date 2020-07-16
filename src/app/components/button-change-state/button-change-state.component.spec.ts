import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChangeStateComponent } from './button-change-state.component';

describe('ButtonChangeStateComponent', () => {
  let component: ButtonChangeStateComponent;
  let fixture: ComponentFixture<ButtonChangeStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonChangeStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChangeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
