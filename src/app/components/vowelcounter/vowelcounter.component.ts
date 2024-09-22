import { Component } from '@angular/core';

@Component({
  selector: 'app-vowelcounter',

  templateUrl: './vowelcounter.component.html',
  styleUrl: './vowelcounter.component.css'
})
export class VowelcounterComponent {
  inputText: string = '';
  vowelCount: number = 0;

  countVowels() {
    const vowels = this.inputText.match(/[aeiou]/gi);
    this.vowelCount = vowels ? vowels.length : 0;
  }
}
