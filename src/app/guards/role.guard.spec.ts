import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { RoleGuard } from './role.guard';

describe('RoleGuard', () => {
  let guard: RoleGuard;
  let injector: TestBed;
  let routeMock: any = { snapshot : {} };
  let routerMock = { navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard, { provide: Router, useValue: routerMock }],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    guard = injector.get(RoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // it('should redirect to /mesero when is not not an admin when login', () => {
  //   const authUser = {
  //     'token': 'abcdefghi123456789',
  //     'email': 'test@test',
  //     'role': true,
  //     'id': '12345'
  //     };
  //   localStorage.setItem('usuario', JSON.stringify(authUser));
  //   expect(guard.canActivate(routeMock)).toBe(true);
  //   localStorage.removeItem('usuario');
  // });
});
