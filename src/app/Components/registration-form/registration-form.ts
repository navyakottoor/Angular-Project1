  import {  CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  @Component({
    selector: 'app-registration-form',
    imports: [ReactiveFormsModule,CommonModule] ,
    templateUrl: './registration-form.html',
      styleUrls: ['./registration-form.css']
  })
  export class RegistrationForm {

    registrationForm: any;
    countries: String[] = ['India', 'China', 'Dubai', 'Singapore', 'Australia'];

    ngOnInit() {
      this.createMyForm();
    }

    createMyForm() {
      this.registrationForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required]),
        middleName: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        address: new FormGroup({
          city: new FormControl('', [Validators.required]),
          state: new FormControl('', [Validators.required]),
          pincode: new FormControl('', [Validators.required])
        }),
        gender: new FormControl(''),
        country: new FormControl('', [Validators.required]),
        comments: new FormControl(''),
        concent: new FormControl(false, [Validators.requiredTrue])
      },{ updateOn: 'blur' });
    }

    submitMyForm(registrationForm: any) {
      console.log(registrationForm);
    }

  }
