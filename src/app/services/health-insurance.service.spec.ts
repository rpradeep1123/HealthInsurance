import { TestBed } from '@angular/core/testing';

import { HealthInsuranceService } from './health-insurance.service';

describe('HealthInsuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthInsuranceService = TestBed.get(HealthInsuranceService);
    expect(service).toBeTruthy();
  });
});
