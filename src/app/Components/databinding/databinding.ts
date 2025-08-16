import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName: string = 'Virat Kohli';
  img_url: string = 'https://shorturl.at/Pit2d';

  flag: boolean = false;

  addToCart() {
    alert('Your Item is adde to Cart!!!');
  }

  hide() {
    document.getElementById("hide").style.display = "none";

  }
}