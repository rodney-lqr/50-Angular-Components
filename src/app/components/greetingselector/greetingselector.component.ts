import { Component } from '@angular/core';

@Component({
  selector: 'app-greetingselector',

  templateUrl: './greetingselector.component.html',
  styleUrl: './greetingselector.component.css'
})
export class GreetingselectorComponent {
  greetings: string[] = ['Hello', 'Hi', 'Welcome', 'Good Day'];
  selectedGreeting: string = '';

  selectGreeting(event: any) {
    this.selectedGreeting = event.target.value;
  }
}
