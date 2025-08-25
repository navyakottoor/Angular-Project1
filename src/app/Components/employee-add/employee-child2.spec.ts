import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChild2 } from './employee-child2';

describe('EmployeeChild2', () => {
  let component: EmployeeChild2;
  let fixture: ComponentFixture<EmployeeChild2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeChild2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChild2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
