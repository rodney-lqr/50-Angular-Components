import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedlooping',

  templateUrl: './nestedlooping.component.html',
  styleUrl: './nestedlooping.component.css'
})
export class NestedloopingComponent {
  table: number[][] = [];

  generateTable() {
    this.table = [];
    for (let i = 1; i <= 5; i++) {
      const row: number[] = [];
      for (let j = 1; j <= 5; j++) {
        row.push(i * j);
      }
      this.table.push(row);
    }
  }
}
