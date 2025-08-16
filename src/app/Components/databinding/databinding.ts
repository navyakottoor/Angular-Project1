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
  showParagraph: boolean = true;   // default visible

  toggleParagraph(): void {
    this.showParagraph = !this.showParagraph;
  }
}