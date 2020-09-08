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
  //   guard.userObject = {email: "vsd@s.com", password: "123321", role: false}
  //   expect(guard.userObject['role']).toBe(false);
  //   expect(routerMock.navigate).toHaveBeenCalledWith('/mesero');
  // });
});
