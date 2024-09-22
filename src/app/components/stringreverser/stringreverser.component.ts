import { Component } from '@angular/core';

@Component({
  selector: 'app-stringreverser',

  templateUrl: './stringreverser.component.html',
  styleUrl: './stringreverser.component.css'
})
export class StringreverserComponent {
  inputText: string = '';
  reversedText: string = '';

  reverseString() {
    this.reversedText = this.inputText.split('').reverse().join('');
  }
}
