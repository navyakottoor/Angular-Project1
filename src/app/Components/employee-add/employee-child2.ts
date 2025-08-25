import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-child2',
  imports: [FormsModule],
  templateUrl: './employee-child2.html',
  styleUrl: './employee-child2.css',
  inputs: ['empSize'],
  outputs: ['addEmpDataEvent']
})
export class EmployeeChild2 {
  
  employee: any = {
    id: '',
    name: '',
    designation: '',
    department: '',
    salary: '',
    email: ''
  };

  addEmpDataEvent = new EventEmitter();
  addEmployeeToEmpArray() {
    this.addEmpDataEvent.emit(this.employee);
  }
}
