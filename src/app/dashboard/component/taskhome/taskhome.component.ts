import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TaskcardComponent } from '../taskcard/taskcard.component';
import { TasksService } from '../../services/tasks.service';
import { NgFor } from '@angular/common';
import { Task } from '../../interfaces/task';
import { Subscription } from 'rxjs';
import { SearchServiceService } from '../../services/search-service.service';


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
  tasks: any[] = [];
  filteredTasks: any[] = [];
  searchTerm: string = '';
  private subscription!: Subscription;

    getDeletedTodo(id: number) {
        this.emitTodoId.emit(id);
    }


    getUpdateTodo(id: number) {

      this.updateTodoId.emit(id);
      }
constructor(private tasksService:TasksService,private searchservice:SearchServiceService){}

// ngOnInit(): void {
//   this.tasksService.getTasks().subscribe(res => {
//     this.tasks = res;
//     this.filterTasks();
//   });

//   this.subscription = this.searchservice.searchTerm.subscribe(term => {
//     this.searchTerm = term;
//     this.filterTasks();
//   });
// }


// filterTasks(): void {
//   if (!this.searchservice.searchTerm) {
//     this.filteredTasks = this.tasks;
//   } else {
//     this.filteredTasks = this.tasks.filter(task =>

//       task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );

//   }
// }

// ngOnDestroy(): void {
//   this.subscription.unsubscribe();
// }

}
