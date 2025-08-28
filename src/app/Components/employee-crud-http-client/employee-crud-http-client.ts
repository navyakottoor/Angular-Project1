import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeCrudHttpClient } from '../../service/employee-crud-http-client';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Employee } from '../../models/employee/Employee';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-crud-http-client',
  imports: [FormsModule, FontAwesomeModule, FaIconComponent],
  templateUrl: './employee-crud-http-client.html',
  styleUrl: './employee-crud-http-client.css',
})
export class EmployeeCRUDHttpClient {
  retrivedEmpData: Employee[] = [];
  empAddBody: Employee = {
    id: '',
    name: '',
    username: '',
    email: '',
  };
  faTrash = faTrash;
  faPencil = faPencil;
  editEmpBody: Employee | null = null;
  
  constructor(private empCrudSHttpClienntervice: EmployeeCrudHttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    
    this.loadEmployees();
  }


  loadEmployees() {
    this.empCrudSHttpClienntervice.getAllEmployees().subscribe(
      (responseData: Employee[]) => {
        console.log(responseData);
        this.retrivedEmpData = responseData;
        // this.cdr.detectChanges();
         this.loadEmployees();
      },
      (error) => console.error(error),
      () => console.log('all data received')
    );
  }


  postNewUserToDB(form: any) {
    // this.empCrudSHttpClienntervice.postNewUserToDB(form, this.empAddBody);
  // this.empAddBody.id = (this.retrivedEmpData.length + 1).toString();
    this.empCrudSHttpClienntervice.postNewUserToDB(this.empAddBody).subscribe({
      next: (savedEmployee) => {
        console.log('Saved:', savedEmployee);
        // Refresh table immediately
        this.retrivedEmpData.push(savedEmployee);
        form.resetForm();
      },
      error: (err) => console.error('Error:', err)
    });
  }

  deleteEmployee(id: String) {
    // this.empCrudSHttpClienntervice.deleteEmployee(id);
    this.empCrudSHttpClienntervice.deleteEmployee(id).subscribe({
    next: () => {
      this.retrivedEmpData = this.retrivedEmpData.filter(emp => emp.id !== id);
      // Remove from local array so table updates immediately
      // this.retrivedEmpData = this.retrivedEmpData.splice(id, 1);
      this.cdr.detectChanges(); // Ensure table updates
      console.log(`Employee with id ${id} deleted.`);
    },
    error: (err) => console.error('Error deleting employee:', err)
  });
  }

  updateToNewEmployee(form: NgForm) {
    
    if (!this.editEmpBody) return;

  this.empCrudSHttpClienntervice.updateToNewEmployee(this.editEmpBody.id, this.editEmpBody).subscribe({
    next: (res) => {
      this.retrivedEmpData = this.retrivedEmpData.map(emp =>
        emp.id === res.id ? res : emp
      );
      this.editEmpBody = null;
      form.resetForm();
      alert('Employee updated successfully!');
    },
    error: (err) => console.error(err)
  });

  }

  prepareEdit(emp: Employee) {
  this.editEmpBody = { ...emp }; // clone object for editing
}

}
