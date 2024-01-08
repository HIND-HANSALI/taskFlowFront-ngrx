import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  
  tasks:any[]= [];
  constructor(private taskService: TaskService,private router:Router) {  }

  ngOnInit() {
    this.getTasks();
    
   }

   private getTasks(){
    this.taskService. getAllTasks().subscribe((data:any) => {
      this.tasks = data.data;
      console.log(data)
    });

  }

}
