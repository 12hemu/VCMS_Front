import { TestBed } from '@angular/core/testing';

import { InsurancecompaniesService } from './insurancecompanies.service';

describe('InsurancecompaniesService', () => {
  let service: InsurancecompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancecompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
