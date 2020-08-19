import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffList } from './staff-list.component';
import { JsonApiService } from '../../services/JsonApiService.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('StaffList component', () => {
  let component: StaffList;
  let fixture: ComponentFixture<StaffList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffList ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [JsonApiService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get list of users', () => {
  //   const usersService = TestBed.inject(JsonApiService);
  //   const http = TestBed.inject(HttpTestingController);
  //   // usersService.getUser().subscribe((response) => {
  //   //   component.users = response;
  //   // });
  //   http.expectOne('http://localhost:3000/users/').flush(['user1', 'user2']);
  //   component.receiveUsers();
  //   expect(component.users).toEqual(component.users);
  // });
  // it('should get list of users', () => {
  //   const usersService = TestBed.inject(JsonApiService);
  //   const http = TestBed.inject(HttpTestingController);
  //   usersService.getUser().subscribe((response) => {
  //     component.users = response;
  //   });
  //   http.expectOne('http://localhost:3000/users/').flush(['rv_1pow', 'ZmFkYiR']);
  //   component.receiveUsers();
  //   expect(component.users).toEqual(['rv_1pow', 'ZmFkYiR']);
  // });
});
