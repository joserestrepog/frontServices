import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;

  @Output() deleteTask = new EventEmitter<number>();

  @Output() changeStateTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(): void {
    this.deleteTask.emit(this.task.id);
  }

  onChangeStateTask(): void {
    this.changeStateTask.emit(this.task.id);
  }

}
