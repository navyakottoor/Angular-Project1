import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChild1 } from './employee-child1';

describe('EmployeeChild1', () => {
  let component: EmployeeChild1;
  let fixture: ComponentFixture<EmployeeChild1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeChild1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChild1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
