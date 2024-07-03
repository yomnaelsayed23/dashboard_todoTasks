import { Component, NgModule, OnInit } from '@angular/core';
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
constructor(private _tasksService:TasksService,public dialog: MatDialog,private searchService: SearchServiceService){}


  ngOnInit(): void {
    this._tasksService.getTasks().subscribe({

      next: res => {
        this.todos=res
        console.log(res)
      },
      error: err => console.log(err)
    })

    // this.updateDataForSearch()
  }

addNewTask(task:any):void{
  this._tasksService.addNewTask(task).subscribe((res)=>{
    this.newTask = {title:'',description:''}
    this._tasksService.getTasks().subscribe({
      next: res => this.todos = res,
      error: err => console.log(err)
    })
  })
  }

  deleteTodoById(id: number) {
    this._tasksService.deleteTask(id).subscribe(res => {
      this.todos = this.todos.filter(todo => todo.id !== id); // remove todo from html
    })
    }


  sendObjecttoservice(newTask:object){
    console.log(this.newTask);
    this._tasksService.setnewtask(this.newTask)


  }

  updateTodoById(id: number) {
    const  task = this.todos.filter(todo => todo.id === id);

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data:{task : task},
      // data:{task : task},
      position: { top: '0', left: '0', right: '0', bottom: '0' },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.result = result; // Get the data returned from the modal
      console.log('Returned data:', this.result);
    });
  }

  // updateDataForSearch(){
  //   this.searchService.getSearchTerm().subscribe(term => this.searchTerm = term);
  // }

  // onSearch(term: string) {
  //   this.searchService.setSearchTerm(term); // Update service with search term
  // }

    }







