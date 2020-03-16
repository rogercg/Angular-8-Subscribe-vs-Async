import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../task.model';
import { TasksServiceService } from '../tasks-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-subscribe',
  templateUrl: './tasks-subscribe.component.html',
  styleUrls: ['./tasks-subscribe.component.css'],
})
export class TasksSubscribeComponent implements OnInit, OnDestroy{
  tasks: Task[] = [];
  private unsubscribe$ = new Subject<void>(); // 
  
  constructor(private tasksService: TasksServiceService) { }

  ngOnInit() {
    this.tasksService.getTasks()
    .pipe(
      takeUntil(this.unsubscribe$)// takeUntil: Operator que marcara como completado nuestro observable. Nos desuscribimos cuando obtengamos respuesta para evitar fugaz de memoria
    )
    .subscribe(tasks=>{
      this.tasks = tasks;// Asignamos el valor que nos retorna a una variable de nuestro componente y poder renderizarlo
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();// Cuando se destruya el componente continuamos con el observable
    this.unsubscribe$.complete();// Definimos como completado el observable
  }

}
