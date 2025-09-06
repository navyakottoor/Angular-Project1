import { Component } from '@angular/core';
import * as data from './users.json';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  imports: [FormsModule, CommonModule, FontAwesomeModule, NgxPaginationModule, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  usersArr = (data as any).default;

  p:any = 1;

  constructor() {
    console.log(data);
  }
}
