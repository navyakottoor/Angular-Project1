import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListSignal } from './to-do-list-signal';

describe('ToDoListSignal', () => {
  let component: ToDoListSignal;
  let fixture: ComponentFixture<ToDoListSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
