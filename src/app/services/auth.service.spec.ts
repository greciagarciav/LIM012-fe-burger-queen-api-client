import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    service = null;
    httpMock.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('post token on route auth', (done: DoneFn) => {
  //   const dataReturn = {token: '12345.abcde.fdgfdg'}
    
  //   const dataUser = { 'email': 'user@bh.com', 'password': 'cinco5' };

  //   service.postUserLogin(dataUser).subscribe(list => {
  //     expect(list.body).toEqual(dataReturn)
  //     done()
  //   });

    

  //   const method = httpMock.expectOne(environment.apiUrl + 'auth/');
  //   expect(method.request.method).toContain('POST')
  //   method.flush(dataReturn)
  // });
  
});
