import { Component } from '@angular/core';

@Component({
  selector: 'app-studentnames',

  templateUrl: './studentnames.component.html',
  styleUrl: './studentnames.component.css'
})
export class StudentnamesComponent {
  students: string[] = ['Rodney', 'Walter', 'Joseph', 'Fiercieval', 'Kent'];
}
