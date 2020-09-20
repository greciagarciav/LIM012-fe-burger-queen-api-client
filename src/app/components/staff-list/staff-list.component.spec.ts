import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StaffList } from './staff-list.component';
import { JsonApiService } from '../../services/JsonApiService.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StaffList component', () => {
  let component: StaffList;
  let fixture: ComponentFixture<StaffList>;
  let service: JsonApiService;
  let httpTestingController: HttpTestingController;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  afterAll(() => {
    localStorage.removeItem('usuario');
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffList ],
      // schemas: [
      //   CUSTOM_ELEMENTS_SCHEMA
      // ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [JsonApiService],
    })
    .compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffList);
    component = fixture.componentInstance;
    service = TestBed.inject(JsonApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('receiveUsers, error status401', () => {
    const errMsg = component.errorMessage;
    spyOn(service, 'handleError').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 401, statusText: errMsg});
  });

  it('receiveUsers, error status403', () => {
    const errMsg = component.errorMessage;
    spyOn(service, 'getUser').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 403, statusText: errMsg});
  });

  it('lessUser, error status401', () => {
    const errMsg = component.errorMessage;
    const email = 'test@test';
    component.lessUser(email);
    spyOn(service, 'deleteUser').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/test@test'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 401, statusText: errMsg});
  });

  it('lessUser, error status403', () => {
    const errMsg = component.errorMessage;
    const email = 'test@test';
    component.lessUser(email);
    spyOn(service, 'deleteUser').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/test@test'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 403, statusText: errMsg});
  });

  it('lessUser, error status404', () => {
    const errMsg = component.errorMessage;
    const email = 'test@test';
    component.lessUser(email);
    spyOn(service, 'deleteUser').and.callThrough();
    const urlString = 'https://rest-burger-queen.herokuapp.com/users/test@test'
    const req = httpTestingController.expectOne(urlString);
    req.flush(errMsg, {status: 404, statusText: errMsg});
  });

});
