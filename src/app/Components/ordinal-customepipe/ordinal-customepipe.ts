import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../custome-pipe/age-pipe';

@Component({
  selector: 'app-ordinal-customepipe',
  imports: [FormsModule, AgePipe],
  templateUrl: './ordinal-customepipe.html',
  styleUrl: './ordinal-customepipe.css'
})
export class OrdinalCustomepipe {
  ageInDate: any;
}
