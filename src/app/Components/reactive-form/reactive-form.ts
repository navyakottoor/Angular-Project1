import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,
    CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
   myForm: any;
  constructor() {
  }
  ngOnInit() {
    this.createMyForm();
  }
  createMyForm() {
    this.myForm = new FormGroup({
      firstName: new FormControl('Sachin', [Validators.required,Validators.minLength(5)]),
      lastName: new FormControl('Tendulkar'),
      email: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl('')
      })
    },{ updateOn: 'blur' });
  }

  submitMyForm(formData: any) {
    console.log(formData);
    console.log(formData.value);
  }
}