import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  constructor(private routerObj: Router) {}
  takeMeToHtml() {
    console.log("Doing Something"); //It can be api call
    this.routerObj.navigate(['/home']);
  }
}
