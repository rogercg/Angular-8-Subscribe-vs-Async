import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks-async',
  templateUrl: './tasks-async.component.html',
  styleUrls: ['./tasks-async.component.css']
})
export class TasksAsyncComponent implements OnInit {

  // Observable de array de Task
  tasks$: Observable<Task[]>;// Por convencion se utiliza el simbolo de dolar cuandose declara un Observable

  constructor(private taskService: TasksServiceService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();//Asignamos el Observable de array de Task a nuestro Observable de array de Task
  }

}
