import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { NgFor } from '@angular/common';
import { title } from 'process';
import { Task } from '../../interfaces/task';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal/modal.component';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-taskcard',
  standalone: true,
  imports: [
    MatDialogModule,
    NgFor,
  ],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.css'
})
export class TaskcardComponent implements OnChanges {
  tasks:Task[] = [];
  @Input() todos!: Task[]
  newTask : any={title:'', description:''};
  @Input() task:any;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()
  @Output() update: EventEmitter<number> = new EventEmitter<number>()

  // SearchedTask = [...this.todos]

constructor(private _tasksService:TasksService,public dialog: MatDialog, private searchService:SearchServiceService){}


ngOnChanges(changes: SimpleChanges): void {
  // this.todos
if(this.todos && this.todos.length > 0){
  console.log("if: " , this.todos);

  this.tasks = this.todos
} else {
  console.log("else: ", this.todos);
// this.search()
  this.getTasks()

}
}


getTasks(): void {
  this._tasksService.getTasks().subscribe(data => {
    this.tasks = data;
  })
}

getthenewtask(){
  this._tasksService.getnewtask()
}


deleteTask(id:number):void{
  this.delete.emit(id)
}
updateTask(id:number):void{
  this.update.emit(id)
}




}
