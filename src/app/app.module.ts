import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksSubscribeComponent } from './tasks-subscribe/tasks-subscribe.component';
import { TasksAsyncComponent } from './tasks-async/tasks-async.component';
import { AppTodoListComponent } from './app-todo-list/app-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksSubscribeComponent,
    TasksAsyncComponent,
    AppTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
