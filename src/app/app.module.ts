import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddTagComponent,
    AddUserComponent,
    ListTaskComponent,
    UpdateTaskComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
