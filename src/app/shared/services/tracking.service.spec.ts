/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrackingService } from './tracking.service';

describe('TrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackingService]
    });
  });

  it('should ...', inject([TrackingService], (service: TrackingService) => {
    expect(service).toBeTruthy();
  }));
});
