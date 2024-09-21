import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number | null = null;
  table: number[] = [];

  generateTable() {
    if (this.number !== null) {
      this.table = Array.from({ length: 10 }, (_, i) => this.number! * (i + 1));
    }
  }
}
