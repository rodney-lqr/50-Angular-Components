import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',

  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  calculateCompoundInterest() {
    if (this.principal && this.rate && this.time && this.frequency) {
      const r = this.rate / 100;
      this.compoundInterest = this.principal * Math.pow(1 + (r / this.frequency), this.frequency * this.time);
    }
  }
}
