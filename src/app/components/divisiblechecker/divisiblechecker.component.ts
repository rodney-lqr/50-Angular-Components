import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',

  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  dividend: number | null = null;
  divisor: number | null = null;
  isDivisible: boolean | null = null;

  checkDivisibility() {
    if (this.dividend !== null && this.divisor !== null && this.divisor !== 0) {
      this.isDivisible = this.dividend % this.divisor === 0;
    }
  }
}
