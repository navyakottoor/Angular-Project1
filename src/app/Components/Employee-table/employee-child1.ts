import { Component, EventEmitter } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-child1',
  imports: [FaIconComponent],
  templateUrl: './employee-child1.html',
  styleUrl: './employee-child1.css',
  inputs: ['empArr'],
  outputs: ['employeeDataEvent']
})
export class EmployeeChild1 {
  empArr: any;
  faTrash = faTrash;

  employeeDataEvent = new EventEmitter();
  emitDeleteEmployeeEvent(id: any) {
    this.employeeDataEvent.emit(id);
  }
}
