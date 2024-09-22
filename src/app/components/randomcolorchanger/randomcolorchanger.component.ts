import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorchanger',

  templateUrl: './randomcolorchanger.component.html',
  styleUrl: './randomcolorchanger.component.css'
})
export class RandomcolorchangerComponent {
  currentColor: string = '';

  changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.currentColor = randomColor;
  }
}
