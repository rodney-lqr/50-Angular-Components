import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',

  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  simpleInterest: number | null = null;

  calculateSimpleInterest() {
    if (this.principal && this.rate && this.time) {
      this.simpleInterest = (this.principal * this.rate * this.time) / 100;
    }
  }
}
