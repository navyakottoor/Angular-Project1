import { Component } from '@angular/core';
import { Databinding } from "../databinding/databinding";
import { Directives } from "../directives/directives";
import { MyModal } from '../my-modal/my-modal';
import { UserList } from "../user-list/user-list";
import { EmployeeList } from "../employee-list/employee-list";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-body',
  imports: [Databinding, Directives, MyModal, UserList, EmployeeList, ProductList],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

  
}
