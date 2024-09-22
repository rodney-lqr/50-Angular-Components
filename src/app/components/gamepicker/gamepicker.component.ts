import { Component } from '@angular/core';

@Component({
  selector: 'app-gamepicker',

  templateUrl: './gamepicker.component.html',
  styleUrl: './gamepicker.component.css'
})
export class GamepickerComponent {
  games: string[] = ['Chess', 'Football', 'Basketball', 'Tennis', 'Badminton'];
  selectedGame: string = '';

  pickRandomGame() {
    const randomIndex = Math.floor(Math.random() * this.games.length);
    this.selectedGame = this.games[randomIndex];
  }
}
