import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',

  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  guess: number | null = null;
  message: string = '';

  checkGuess() {
    if (this.guess !== null) {
      if (this.guess < this.randomNumber) {
        this.message = 'Too low! Try again.';
      } else if (this.guess > this.randomNumber) {
        this.message = 'Too high! Try again.';
      } else {
        this.message = 'Congratulations! You guessed it!';
      }
    }
  }

  resetGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
    this.message = '';
  }
}
