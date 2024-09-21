import { Component } from '@angular/core';

@Component({
  selector: 'app-farehnheittocelcius',

  templateUrl: './farehnheittocelcius.component.html',
  styleUrl: './farehnheittocelcius.component.css'
})
export class FarehnheittocelciusComponent {
  fahrenheit: number | null = null;
  celsius: number | null = null;

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * (5 / 9);
    }
  }
}
