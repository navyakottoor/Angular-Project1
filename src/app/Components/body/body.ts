import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';
import { EmployeeCRUD } from '../employee-crud/employee-crud';

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
    EmployeeCRUD,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
