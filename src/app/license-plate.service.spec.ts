import { TestBed, inject } from '@angular/core/testing';

import { LicensePlateService } from './license-plate.service';

describe('LicensePlateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicensePlateService]
    });
  });

  it('should be created', inject([LicensePlateService], (service: LicensePlateService) => {
    expect(service).toBeTruthy();
  }));
});
