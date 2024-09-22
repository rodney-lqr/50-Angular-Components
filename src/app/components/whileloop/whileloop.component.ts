import { Component } from '@angular/core';

@Component({
  selector: 'app-whileloop',

  templateUrl: './whileloop.component.html',
  styleUrl: './whileloop.component.css'
})
export class WhileloopComponent {
  numbers: number[] = [];

  generateNumbers() {
    this.numbers = [];
    let i = 1;
    while (i <= 10) {
      this.numbers.push(i);
      i++;
    }
  }
}
