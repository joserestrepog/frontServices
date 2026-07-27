import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tittle = "Task List";
  logoURL = "https://angular.io/assets/images/logos/angular/angular.svg";
  logoAlt = "Angular Logo";
  disabledBtn = false;
  counter = 0;
  name = "";
  tasks: Task [] = [
    {id: 1, description: "Task 1", state: false},
    {id: 2, description: "Task 2", state: true},
    {id: 3, description: "Task 3", state: false}
  ];

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  onDeleteTask (taskId: number): void{
    this.tasks = this.tasks.filter(task => task.id != taskId);
  }

  onChangeStateTask (taskId: number): void{
    const task = this.tasks.find(task => task.id === taskId);
    if(task){
      task.state = !task.state;
    }
  }

  onTaskAdded(taskDescription: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      description: taskDescription,
      state: false
    }
    this.tasks.push(newTask);
  }

}
