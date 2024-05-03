import { TestBed } from '@angular/core/testing';

import { AddconsultService } from './addconsult.service';

describe('AddconsultService', () => {
  let service: AddconsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddconsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
