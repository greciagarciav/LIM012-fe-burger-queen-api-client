import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserComponent } from './add-new-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

const fixture = TestBed.createComponent(AddNewUserComponent);
describe('AddNewUserComponent', () => {

  it('should create', () => {
      TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ AddNewUserComponent ]
    })
    .compileComponents(); 
   
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});

// describe('dom elements',()=>{
//   it('should find the <p> with fixture.debugElement.nativeElement)', () => {
//     const bannerDe: DebugElement = fixture.debugElement;
//     const bannerEl: HTMLElement = bannerDe.nativeElement;
//     const div = bannerEl.querySelector('div');
// // console.log(div.firstChild);
//   });
// })
