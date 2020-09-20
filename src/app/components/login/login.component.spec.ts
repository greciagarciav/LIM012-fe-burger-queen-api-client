import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from 'src/app/model/user';
import { JsonApiService } from '../../services/JsonApiService.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authservice: AuthService;
  let usersservice: JsonApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [AuthService, JsonApiService]
    })
    .compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('invalid when form is empty', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();
    let userLogged : User;
    userLogged = component.form.value;

    component.authUser();
    expect(userLogged.email).toBe('test@test.com');
    expect(userLogged.password).toBe('123456789');
  });

  it('resp when is 200', () => {
    const errMsg = component.errorMessage;
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    component.form.valid;
    component.authUser();
    const urlString = 'https://rest-burger-queen.herokuapp.com/auth';
    const req = httpTestingController.expectOne(urlString);
    req.flush({status: 200});
    const urlStringUser = 'https://rest-burger-queen.herokuapp.com/users/test@test.com';
    const reqUs = httpTestingController.expectOne(urlStringUser);
    reqUs.flush({status: 200});
    const urlStringUserPas = 'https://rest-burger-queen.herokuapp.com/users/test@test.com';
    const reqUsP = httpTestingController.expectNone(urlStringUserPas);
  });

});
