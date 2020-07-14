import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListCardsComponent } from './menu-list-cards.component';

describe('MenuListCardsComponent', () => {
  let component: MenuListCardsComponent;
  let fixture: ComponentFixture<MenuListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
