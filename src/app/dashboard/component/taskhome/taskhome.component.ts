import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TaskcardComponent } from '../taskcard/taskcard.component';
import { TasksService } from '../../services/tasks.service';
import { NgFor } from '@angular/common';
import { Task } from '../../interfaces/task';


@Component({
  selector: 'app-taskhome',
  standalone: true,
  imports: [
    TaskcardComponent,
    NgFor,
  ],
  templateUrl: './taskhome.component.html',
  styleUrl: './taskhome.component.css'
})
export class TaskhomeComponent {

  @Input() todos!: Array<Task>
  @Output() emitTodoId: EventEmitter<number> = new EventEmitter();
  @Output() updateTodoId: EventEmitter<number> = new EventEmitter();


    getDeletedTodo(id: number) {
        this.emitTodoId.emit(id);
    }


    getUpdateTodo(id: number) {
     
      this.updateTodoId.emit(id);
      }
constructor(private _tasksService:TasksService){}
// getTasks(): void {
//   this._tasksService.getTasks().subscribe(data => {
//     this.tasks = data;
//   })
// }
// reciveTaskfrominput(){
//   this._tasksService.getnewtask().subscribe(data =>{
//     this.reciveTask = data
//     console.log(data);

//   })
}
// addNewTask(task:any):void{
//   this._tasksService.addNewTask(task).subscribe(()=>{
//     // this.getTasks()
//     this.newTask = {title:'',description:''}
//   })
//   }

  // deleteTask(id:number):void{
  //   this._tasksService.deleteTask(id).subscribe(()=>{
  //     this._tasksService.getTasks()
  //   })
  // }
// }
