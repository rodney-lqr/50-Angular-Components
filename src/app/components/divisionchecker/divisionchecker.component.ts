import { Component } from '@angular/core';

@Component({
  selector: 'app-divisionchecker',

  templateUrl: './divisionchecker.component.html',
  styleUrl: './divisionchecker.component.css'
})
export class DivisioncheckerComponent {
  dividend: number = 0;
  divisor: number = 1;
  isDivisible: boolean | null = null;

  checkDivisibility() {
    this.isDivisible = this.dividend % this.divisor === 0;
  }
}
