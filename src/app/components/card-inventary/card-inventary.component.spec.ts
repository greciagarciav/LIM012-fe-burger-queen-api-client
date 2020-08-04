import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventaryComponent } from './card-inventary.component';

describe('CardInventaryComponent', () => {
  let component: CardInventaryComponent;
  let fixture: ComponentFixture<CardInventaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInventaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
