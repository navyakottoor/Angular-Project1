import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  flag: boolean = false;
  flag2: boolean = false;
  limit: number = 100;
  message: String = '';
  option: String = '';
  num1: number = 0;
  num2: number = 0;
  ption: string = "";
  res: number = 0;

  selectOpertation: string = "";
  operation(){
    if(this.selectOpertation!=""){
      switch(this.selectOpertation){
        case "+":
          this.res = +this.num1 + +this.num2
          break
        case "-":
          this.res = this.num1 - this.num2
          break
        case "*":
          this.res = this.num1 * this.num2
          break
        case "/":
          this.res = this.num1 / this.num2
          break
        default:
          this.res = 0
          break
    }
  }
}
}