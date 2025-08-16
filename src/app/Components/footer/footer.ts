import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  initializeCounter() {
            let count = 0; // once

            return function () {
                count++;
                document.querySelector('span').innerText = count;
            }
        }
        let increment = initializeCounter();
        console.dir(increment);
        
        function sayHi() {
            count++;
            document.querySelector('span').innerText = count;
            console.log('Hiiiiiiii')
        }
}
