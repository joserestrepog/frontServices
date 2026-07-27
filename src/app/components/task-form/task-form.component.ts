import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<string>();
  taskDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.taskDescription !== ""){
      this.taskAdded.emit(this.taskDescription);
      this.taskDescription = "";
    }
  }

}
