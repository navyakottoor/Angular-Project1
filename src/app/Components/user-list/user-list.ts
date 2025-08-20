import { Component,ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDollarSign,faStar,faShirt } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  imports: [FormsModule, CommonModule, FontAwesomeModule, NgxPaginationModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  
}
