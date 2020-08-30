import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AddNewUserComponent } from './add-new-user.component';
import { User } from '../../model/user'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddNewUserComponent', () => {
  let component: AddNewUserComponent;
  let fixture: ComponentFixture<AddNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ AddNewUserComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit()

  });

  it('should form invalid when empty',()=>{
  expect(component.addForm.valid).toBeFalsy()
  });

  it('email field validity',()=>{
    let email = component.addForm.controls['email'];
    expect(email.valid).toBeFalsy();

    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

  });

  it('subbmitting a form emits a user', () => {
    expect(component.addForm.valid).toBeFalsy();
    component.addForm.controls['email'].setValue('test@test.com');
    component.addForm.controls['password'].setValue('123456789');
    expect(component.addForm.valid).toBeTruthy();

    let userAdded : User;
    userAdded = component.addForm.value;

    component.addUser();

    expect(userAdded.email).toBe('test@test.com');
    expect(userAdded.password).toBe('123456789');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

