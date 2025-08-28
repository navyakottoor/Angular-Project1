import { TestBed } from '@angular/core/testing';

import { EmployeeCrudHttpClient } from './employee-crud-http-client';

describe('EmployeeCrudHttpClient', () => {
  let service: EmployeeCrudHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCrudHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
