import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerListCardsComponent } from './conteiner-list-cards.component';

describe('ConteinerListCardsComponent', () => {
  let component: ConteinerListCardsComponent;
  let fixture: ComponentFixture<ConteinerListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteinerListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteinerListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
