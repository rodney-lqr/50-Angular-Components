import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',

  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null; // in meters
  weight: number | null = null; // in kilograms
  bmi: number | null = null;

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
    }
  }
}
