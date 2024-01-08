import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = 'http://localhost:8080/api/tasks';

  constructor(private httpClient:HttpClient) { }

  
  getAllTasks(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
}
