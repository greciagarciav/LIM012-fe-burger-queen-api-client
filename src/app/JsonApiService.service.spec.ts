/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonApiServiceService } from './JsonApiService.service';

describe('Service: JsonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonApiServiceService]
    });
  });

  it('should ...', inject([JsonApiServiceService], (service: JsonApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
