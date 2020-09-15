import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let injector: TestBed;
  let guard: AuthGuard;
  let service: AuthService;
  let routeMock: any = { snapshot : {}};
  let routeStateMock:any = { snapshot: {}, url: '/cookies'};
  let routerMock = { navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerMock }],
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = injector.get(AuthService);
    guard = injector.get(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect to login when not authenticated', () => {
    localStorage.removeItem('usuario');
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should redirect to login when authenticated', () => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

});
