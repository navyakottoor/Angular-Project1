import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {

  data: [] = [];
  submitMyForm(form: any) {
    console.log(form);
  }
}
