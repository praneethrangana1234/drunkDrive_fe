import { TestBed } from '@angular/core/testing';

import { WebcamServiceService } from './webcam-service.service';

describe('WebcamServiceService', () => {
  let service: WebcamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebcamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
