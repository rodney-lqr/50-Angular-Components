import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  inputNumber: number | null = null;
  resultMessage: string | null = null;

      checkEvenOdd() {
    if (this.inputNumber !== null) {
      if (this.inputNumber % 2 === 0) {
        this.resultMessage = `${this.inputNumber} is even.`;
      } else {
        this.resultMessage = `${this.inputNumber} is odd.`;
      }
    }
  }
}
