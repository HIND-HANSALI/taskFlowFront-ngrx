import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';

const routes: Routes = [
  {path: 'tasks', component: ListTaskComponent},
  {path: 'createTask', component: AddTaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
