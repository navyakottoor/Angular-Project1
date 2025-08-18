import { Component } from '@angular/core';
import { Databinding } from "../databinding/databinding";
import { Directives } from "../directives/directives";

@Component({
  selector: 'app-body',
  imports: [Databinding, Directives],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

  
}
