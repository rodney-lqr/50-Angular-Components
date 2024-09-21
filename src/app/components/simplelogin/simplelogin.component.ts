import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',

  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string | null = null;

  login() {
    if (this.email && this.password) {
      // Here you can implement actual login logic (e.g., authentication)
      this.loginMessage = `Logged in with Email: ${this.email}`;
    } else {
      this.loginMessage = 'Please enter both email and password.';
    }
  }
}
