import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',

  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputString: string = '';
  wordCount: number = 0;

  countWords() {
    this.wordCount = this.inputString.trim() ? this.inputString.trim().split(/\s+/).length : 0;
  }
}
