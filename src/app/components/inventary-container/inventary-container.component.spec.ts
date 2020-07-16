import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaryContainerComponent } from './inventary-container.component';

describe('InventaryContainerComponent', () => {
  let component: InventaryContainerComponent;
  let fixture: ComponentFixture<InventaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
