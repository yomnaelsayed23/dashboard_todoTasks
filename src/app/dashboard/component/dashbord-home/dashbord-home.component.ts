import { Component, Input, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AsideComponent } from '../aside/aside.component';
import { TaskhomeComponent } from '../taskhome/taskhome.component';
import { RouterOutlet } from '@angular/router';
import { TaskcardComponent } from '../taskcard/taskcard.component';
import { TasksService } from '../../services/tasks.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Task } from '../../interfaces/task';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal/modal.component';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-dashbord-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AsideComponent,
    TaskhomeComponent,
    RouterOutlet,
    TaskcardComponent,
    // NgModule,
    // NgModel,
    FormsModule,
    MatDialogModule,
    ModalComponent,
    // MatDialog

  ],
  templateUrl: './dashbord-home.component.html',
  styleUrl: './dashbord-home.component.css'
})
export class DashbordHomeComponent implements OnInit {

  newTask : any={title:'', description:''};
  result: any;
  todos!: Array<Task>
  searchTerm: string = '';
  tasks: Task[] = [];
  @Input() filter!: string
constructor(private _tasksService:TasksService,public dialog: MatDialog,private searchService: SearchServiceService){}


  ngOnInit(): void {
    this._tasksService.getTasks().subscribe({

      next: res => {
        this.todos=res
        console.log(res)
      },
      error: err => console.log(err)
    })

  }

addNewTask(task:any):void{
  this._tasksService.addNewTask(task).subscribe((res)=>{
    this.newTask = {title:'',description:''}
    this._tasksService.getTasks().subscribe({
      next: res => this.todos = res,
      error: err => console.log(err)

    })
    console.log("from dash home");
  })
  }

  deleteTodoById(id: number) {
    this._tasksService.deleteTask(id).subscribe(res => {
      this.todos = this.todos.filter(todo => todo.id !== id); // remove todo from html
    })
    }


  

  updateTodoById(id: number) {
    const  task = this.todos.filter(todo => todo.id === id);

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data:{task : task},

       panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.updateTask(result);


      }
    });
  }

  updateFilter(searchTerm: string): void {
    this.filter = searchTerm;
  }

  updateTask(updatedTask: Task): void {
    this._tasksService.updateTask(updatedTask).subscribe(task => {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    });
  }

    }







