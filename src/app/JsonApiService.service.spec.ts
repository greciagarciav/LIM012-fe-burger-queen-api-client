/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonApiService } from './JsonApiService.service';

describe('Service: JsonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonApiService]
    });
  });

  it('should ...', inject([JsonApiService], (service: JsonApiService) => {
    expect(service).toBeTruthy();
  }));
});
