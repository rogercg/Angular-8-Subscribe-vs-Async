import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-app-todo-list',
  templateUrl: './app-todo-list.component.html',
  styleUrls: ['./app-todo-list.component.css']
})
export class AppTodoListComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

}
