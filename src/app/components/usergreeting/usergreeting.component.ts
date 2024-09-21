import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  userName: string = '';
  greeting: string | null = null;

  displayGreeting() {
    if (this.userName) {
      this.greeting = `Hello, ${this.userName}! Welcome!🎉`;
    }
  }
}
