import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../service/employee';

@Component({
  selector: 'app-employeewithservice',
  imports: [FormsModule],
  templateUrl: './employeewithservice.html',
  styleUrl: './employeewithservice.css'
})
export class Employeewithservice {
  filteredArrayOfEmp: any;
  constructor(private empServiceObj: Employee) {
    this.filteredArrayOfEmp = this.empServiceObj.employeeArray;
  }

  selectedOption: any = '';

  filteredEmpData(filter: any) {
    this.filteredArrayOfEmp = this.empServiceObj.getFilteredEmployees(filter);
  }
  
  
}
