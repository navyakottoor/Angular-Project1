import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCURD } from './employee-curd';

describe('EmployeeCURD', () => {
  let component: EmployeeCURD;
  let fixture: ComponentFixture<EmployeeCURD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCURD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCURD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
