import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',

  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
  numbers: number[] = [];

  generateNumbers() {
    this.numbers = [];
    for (let i = 1; i <= 10; i++) {
      this.numbers.push(i);
    }
  }
}
