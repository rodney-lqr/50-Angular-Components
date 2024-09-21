import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputText: string = '';
  textLength: number | null = null;

  // Method to calculate the length of the input string
  calculateLength() {
    this.textLength = this.inputText.length;
  }
}
