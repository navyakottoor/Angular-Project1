import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUDHttpClient } from './employee-crud-http-client';

describe('EmployeeCRUDHttpClient', () => {
  let component: EmployeeCRUDHttpClient;
  let fixture: ComponentFixture<EmployeeCRUDHttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUDHttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUDHttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
