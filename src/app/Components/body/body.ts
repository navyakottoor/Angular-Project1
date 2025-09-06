import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { OrdinalCustomepipe } from "../ordinal-customepipe/ordinal-customepipe";
import { EmployeeCURD } from "../employee-curd/employee-curd";
import { Employeewithservice } from "../employeewithservice/employeewithservice";
import { HttpDemo1 } from "../http-demo1/http-demo1";
import { EmployeeCRUDHttpClient } from "../employee-crud-http-client/employee-crud-http-client";
import { EmployeeSubjectAssignment } from "../employee-subject-assignment/employee-subject-assignment";
import { ToDoListSignal } from "../to-do-list-signal/to-do-list-signal";
import { TemplateDrivenForm } from "../template-driven-form/template-driven-form";
import { ReactiveForm } from '../reactive-form/reactive-form';
import { RegistrationForm } from "../registration-form/registration-form";
import { FileExplorerStructure } from "../file-explorer-structure/file-explorer-structure";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // MyModal,
    // UserList,
    // EmployeeList,
    // ProductList,
    // Demo1,
    // EmployeeCRUD,
    // OrdinalCustomepipe,
    // EmployeeCURD,
    Employeewithservice,
    EmployeeCRUDHttpClient,
    // SignalDemo,
    EmployeeSubjectAssignment,
    ToDoListSignal,
    TemplateDrivenForm,
    ReactiveForm,
    RegistrationForm,
    RouterOutlet,
    FileExplorerStructure,
    UserList
],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
