import { Component } from '@angular/core';
import { EmployeeChild1 } from "../Employee-table/employee-child1";
import { EmployeeChild2 } from "../employee-add/employee-child2";


@Component({
  selector: 'app-employee-curd',
  imports: [EmployeeChild1, EmployeeChild2],
  templateUrl: './employee-curd.html',
  styleUrl: './employee-curd.css'
})
export class EmployeeCURD {
   employeeArray = [
    {id:1,name:"John Doe",designation:"Software Engineer",department:"IT",salary:60000,email:"john.doe@example.com"},
    {id:2,name:"Jane Smith",designation:"Project Manager",department:"Operations",salary:80000,email:"jane.smith@example.com"},
    {id:3,name:"Michael Johnson",designation:"UI/UX Designer",department:"Design",salary:55000,email:"michael.johnson@example.com"},
    {id:4,name:"Emily Davis",designation:"HR Executive",department:"Human Resources",salary:45000,email:"emily.davis@example.com"},
    {id:5,name:"David Wilson",designation:"Data Analyst",department:"Analytics",salary:65000,email:"david.wilson@example.com"}
  ];

  empSize = this.employeeArray.length+1;
  parentEmployeeUpdated: any;
  updateEmployeeDelete(val: any) {
      this.parentEmployeeUpdated = val;
      this.updateEmpArr(this.parentEmployeeUpdated);
  }

  updateEmpArr(parentEmployeeUpdated: any) {
    this.employeeArray.splice(parentEmployeeUpdated,1);
  }

  addEmployeeToArray(newEmpData: any) {
    newEmpData.id = this.employeeArray.length+1
    this.employeeArray.push(newEmpData);
  }

}

