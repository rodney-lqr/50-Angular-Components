import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  formData = {
    name: '',
    email: '',
    address: '',
  };
  submitForm() {
    console.log('Form Submitted!', this.formData);

  }
}
