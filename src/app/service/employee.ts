import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  
  employeeArray = [
    {id:1,name:"John Doe",gender:"male",designation:"Software Engineer",department:"IT",salary:60000,email:"john.doe@example.com"},
    {id:2,name:"Jane Smith",gender:"male",designation:"Project Manager",department:"Operations",salary:80000,email:"jane.smith@example.com"},
    {id:3,name:"Michael Johnson",gender:"male",designation:"UI/UX Designer",department:"Design",salary:55000,email:"michael.johnson@example.com"},
    {id:4,name:"Emily Davis",gender:"female",designation:"HR Executive",department:"Human Resources",salary:45000,email:"emily.davis@example.com"},
    {id:5,name:"Shanon Wilson",gender:"female",designation:"Data Analyst",department:"Analytics",salary:65000,email:"david.wilson@example.com"}
  ];

  getFilteredEmployees(filter: any){
    if(filter === 'male') {
      return this.employeeArray.filter(
        (ele) => ele.gender === 'male'
      )
    } else if(filter === 'female') {
      return this.employeeArray.filter(
        (ele) => ele.gender === 'female'
      )
    } else  {
        return this.employeeArray;
      }
  } 
}
