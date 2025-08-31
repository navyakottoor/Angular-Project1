import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeCrudHttpClient } from '../../service/employee-crud-http-client';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Employee } from '../../models/employee/Employee';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-subject-assignment',
  imports: [],
  templateUrl: './employee-subject-assignment.html',
  styleUrl: './employee-subject-assignment.css'
})
export class EmployeeSubjectAssignment {
  
  //   employeeArray = [
  //   {id:1,name:"John Doe",designation:"Software Engineer",department:"IT",salary:60000,email:"john.doe@example.com"},
  //   {id:2,name:"Jane Smith",designation:"Project Manager",department:"Operations",salary:80000,email:"jane.smith@example.com"},
  //   {id:3,name:"Michael Johnson",designation:"UI/UX Designer",department:"Design",salary:55000,email:"michael.johnson@example.com"},
  //   {id:4,name:"Emily Davis",designation:"HR Executive",department:"Human Resources",salary:45000,email:"emily.davis@example.com"},
  //   {id:5,name:"David Wilson",designation:"Data Analyst",department:"Analytics",salary:65000,email:"david.wilson@example.com"}
  // ];
  
  //   faTrash = faTrash;
  //   faDollar= faDollarSign;
  //   faEdit= faEdit;
  //   faEye= faEye;
  //   flag: boolean = false;
  //   res: any;
  //   employee: any = {
  //     id: '',
  //     name: '',
  //     designation: '',
  //     department: '',
  //     salary: '',
  //     email: ''
  //   };
  
  //   openConfirmation() {
  //     Swal.fire({
  //       title: 'Do you want to save the changes?',
  //       showDenyButton: true,
  //       showCancelButton: true,
  //       confirmButtonText: 'Save',
  //       denyButtonText: `Don't save`,
  //     }).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         Swal.fire('Saved!', '', 'success');
  //       } else if (result.isDenied) {
  //         Swal.fire('Changes are not saved', '', 'info');
  //       }
  //     });
  //   }
  
  
  //   confirmAndDelete(val: any) {
  //     Swal.fire({
  //       title: 'Are you sure? Do you want Delete Employee',
  //       showDenyButton: true,
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes',
  //       denyButtonText: `No`,
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.employeeArray.splice(val,1);
  //         Swal.fire('Deleted!', '', 'success');
  //       } else if (result.isDenied) {
  //         Swal.fire('Changes are not saved', '', 'info');
  //       }
  //     });
  //   }
  
  //   viewEmployee(id: number) {
  //       this.res = this.employeeArray.find(ele => id === ele.id);
  //   }
  //   addEmployee() {
  //       // this.res = this.employeeArray.find(ele => id === ele.id);
  //   }
  
  //   saveEmployee() {
  //     this.employeeArray.push({id: (this.employeeArray.length)+1, name: this.employee.name, designation: this.employee.designation, department: this.employee.department, salary: this.employee.salary, email: this.employee.email});
  //     this.employee = {};
  //     new Snackbar('EmployAdded Successfully',
  //       { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
  //     );
  //   }
}
