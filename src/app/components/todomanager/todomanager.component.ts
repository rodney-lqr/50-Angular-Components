import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',

  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  task: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.task) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
