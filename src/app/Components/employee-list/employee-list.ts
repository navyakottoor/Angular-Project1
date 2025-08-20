import { Component } from '@angular/core';
import employeeData from './employee_data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
    employees = employeeData;
}
