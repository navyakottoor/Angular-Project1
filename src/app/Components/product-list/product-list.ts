import { Component,ElementRef, ViewChild } from '@angular/core';
import * as data from './product-list.json';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDollarSign,faStar,faShirt } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule, FontAwesomeModule, NgxPaginationModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  productListArray = (data as any).default;
  faDollarSign = faDollarSign;
  faStar = faStar;
  faShirt = faShirt;
  p: any;
  productListResult: any[] = this.productListArray;

  style = {
    color: 'black'
  };
  style1 = {
    color: 'grey'
  };

  searchWord(val: String) {
    if(val === '') {
      this.productListResult = this.productListArray;
    } else{
    this.productListResult = this.productListArray.filter((ele: any) => (ele.title).includes(val));
    }
  }

  sortByPrice() {
    this.productListResult = this.productListArray.sort((a: any,b: any) => {
      return a.price-b.price;
    });
  }
}
