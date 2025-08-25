import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeewithservice } from './employeewithservice';

describe('Employeewithservice', () => {
  let component: Employeewithservice;
  let fixture: ComponentFixture<Employeewithservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeewithservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeewithservice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
