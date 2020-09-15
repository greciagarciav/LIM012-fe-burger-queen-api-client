import { TestBed, async, inject, tick } from '@angular/core/testing';
import { JsonApiService } from './JsonApiService.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('Service: JsonApiService', () => {
  let service: JsonApiService;
  let httpMock: HttpTestingController;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  afterAll(() => {
    localStorage.removeItem('usuario');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonApiService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JsonApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    service = null;
    httpMock.verify()
  });

  it('should get all users', () => {
    let serviceSpy: any;

    const usersData = [
      { "email": "won@emef.com", "roles": { "admin": false }, "id": "IJWpwQr" },
      { "email": "carlos@emef.com", "roles": { "admin": false }, "id": "IJWp222" }
    ]
    serviceSpy = spyOn(service, 'getUser').and.returnValue(of(usersData));
    service.getUser()
      .subscribe((resp: any) => {
        expect(resp).toEqual(usersData);

      });
  });
  it('should get add a new user', (done: DoneFn) => {
    const dataPost: Array<any> = [
      { "email": "carlos@emef.com", "roles": { "admin": false }, "id": "IJWp222" },
      { "email": "min@emef.com", "roles": { "admin": false }, "id": "IJWpwQ2" }
    ]
    const addData = { "email": "min@emef.com", "roles": { "admin": false }, "id": "IJWpwQ2" }

    service.postUser(addData).subscribe(list => {
      expect(list.body).toEqual(dataPost)
      done()
    });

    const method = httpMock.expectOne(environment.apiUrl + 'users/');
    expect(method.request.method).toContain('POST')
    method.flush(dataPost)

  });

  it('should update a user', (done: DoneFn) => {
    const initial = [{ "email": "carlos@emef.com", "roles": { "admin": false }, "id": "IJWp222" }]
    const update = [{ "email": "juan@emef.com", "roles": { "admin": false }, "id": "IJWp222" }]
    service.putUser(initial, 'IJWp222').subscribe(list => {
      expect(list.body).toBe(update)
      done()
    });

    const method = httpMock.expectOne(environment.apiUrl + 'users/IJWp222');
    expect(method.request.method).toContain('PUT')
    method.flush(update)
  });

  it('should delete product of the list', (done: DoneFn) => {
    // let serviceSpy: any;
    // serviceSpy = spyOn(service, 'deleteUser').and.returnValue(of({}));
    // service.deleteUser('IJWp222')
    //   .subscribe((resp: any) => {
    //     expect(resp).toEqual({});
    //   });

      const final = [];
      service.deleteUser('test@test').subscribe((resp:any) => {
        expect(resp).toBe(final);
        done();
      });

      const method = httpMock.expectOne(environment.apiUrl + 'users/test@test');
      expect(method.request.method).toContain('DELETE');
      method.flush(final);
  });

});
