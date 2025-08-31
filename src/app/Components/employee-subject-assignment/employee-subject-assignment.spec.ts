import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectAssignment } from './employee-subject-assignment';

describe('EmployeeSubjectAssignment', () => {
  let component: EmployeeSubjectAssignment;
  let fixture: ComponentFixture<EmployeeSubjectAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSubjectAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSubjectAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
