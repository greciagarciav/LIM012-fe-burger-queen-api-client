/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, tick } from '@angular/core/testing';
import { JsonApiService } from './JsonApiService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('Service: JsonApiService', () => {
  let masterService: JsonApiService;
  let valueServiceSpy
  // let valueServiceSpy: jasmine.SpyObj<HttpClient>; // simulación con múltiples espías
const spy = jasmine.createSpyObj('JsonApiService', ['usersService']);
  let data={
    email: "harvie@gmail.com", roles: {
      admin: false
    }, password: "234", id: "ZmFkYiR"}


    valueServiceSpy=spy.usersService.and.returnValue(of(data))

  beforeEach(() => {
    
    TestBed.configureTestingModule({ //toma un obj con propiedzdes de ngModule
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: JsonApiService, useValue: spy }
      ]
    });
    // masterService = TestBed.inject(JsonApiService);
    // valueServiceSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>


  });
  // it('should return data users from JsonApiService', () => {
  //   // service = TestBed.inject(JsonApiService);
  //   // expect(service.getUser()).toHaveBeenCalled();
  //   const stubValue = 'stub value';
  //   // valueServiceSpy.get.and.returnValue(stubValue);
  //   // expect(masterService.getUser())
  //   //   .toBe(stubValue, 'service returned stub value');
  //   tick(1);
  //   expect(valueServiceSpy.get.calls.mostRecent().returnValue).toBe(stubValue);

  // });
  it('retrieves all the cars', inject([JsonApiService], (service: JsonApiService) => {
    return service.getUser().subscribe((result) => {
    //   expect(result).toBeGreaterThan(0);
      expect(typeof result).toBe('object');
    // service.getUser().subscribe(result => expect(result).toBeGreaterThan(0)); 
      expect(service).toBeTruthy();
    });
// });
  // }));
}));
});
