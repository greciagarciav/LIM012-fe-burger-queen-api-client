import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuComponent } from './vertical-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VerticalMenuComponent', () => {
  let component: VerticalMenuComponent;
  let fixture: ComponentFixture<VerticalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ VerticalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be activated', () => {
    component.changeImage();
    expect(component.desactivado).toBe(true);
  });

  it('should not be activated', () => {
    component.changeImage();
    expect(!component.desactivado).toBe(false);
  });

});
