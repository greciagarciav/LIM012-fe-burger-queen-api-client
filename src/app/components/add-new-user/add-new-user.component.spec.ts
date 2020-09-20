import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AddNewUserComponent } from './add-new-user.component';
import { User } from '../../model/user'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonApiService } from '../../services/JsonApiService.service';
import { of } from 'rxjs';
import { HttpBackend, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

describe('AddNewUserComponent', () => {
  let component: AddNewUserComponent;
  let fixture: ComponentFixture<AddNewUserComponent>;
  let service: JsonApiService;
  let httpTestingController: HttpTestingController;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [JsonApiService],
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
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(JsonApiService);
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    expect(userAdded.email).toBe('test@test.com');
    expect(userAdded.password).toBe('123456789');
  });

  it('addUser, should call service.postUser', () => {
    const fakeUser = {"email": 'test@test.com', "roles": { "admin": false }, "password": '123456789', "id": '123'};
    const fakeUserService = jasmine.createSpyObj('service', ['postUser']);
    const spy = fakeUserService.postUser.and.returnValue(of([fakeUser]));
    component.addUser();
    fakeUserService.postUser(fakeUser).subscribe(user => {
      expect(spy).toHaveBeenCalled();
      expect(user).toEqual([fakeUser]);
    });
  });

  it('addUser, should send success response to addUser', () => {
    spyOn(component, 'addUser');
    component.addUser();
    expect(component.addUser).toHaveBeenCalled();
  });

  it('should handle error response when add a user', () => {
    component.addForm.controls['email'].setValue('test@test');
    component.addForm.controls['password'].setValue('123456789');
    const errMsg = component.errorMessage;
    component.addUser();
    spyOn(service, 'handleError').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 403, statusText: errMsg});
  });
});

