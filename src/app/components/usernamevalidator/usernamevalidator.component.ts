import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',

  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null;

  validateUsername() {
    const usernamePattern = /^[a-zA-Z0-9]{5,10}$/;
    this.isValid = usernamePattern.test(this.username);
  }
}
