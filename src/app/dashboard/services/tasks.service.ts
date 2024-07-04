import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject('');
  private baseUrl = "http://localhost:3000/tasks"
  constructor( private _httpClient: HttpClient) { }


  getTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>("http://localhost:3000/tasks")
  }
  setnewtask(task:any){
    this.tasksSubject.next(task)
  }
  getnewtask():Observable<string>{
    return this.tasksSubject.asObservable()
  }
  addNewTask(task:any):Observable<any>{
    return this._httpClient.post(this.baseUrl, task)
  }

  deleteTask(id:number):Observable<any>{
    return this._httpClient.delete(`${this.baseUrl}/${id}`)
  }


  updateTask(task: Task): Observable<Task> {
    return this._httpClient.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }
}
