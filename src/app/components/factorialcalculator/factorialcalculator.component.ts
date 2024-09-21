import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',

  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.factorialHelper(this.number);
    }
  }

  private factorialHelper(n: number): number {
    return n <= 1 ? 1 : n * this.factorialHelper(n - 1);
  }
}
