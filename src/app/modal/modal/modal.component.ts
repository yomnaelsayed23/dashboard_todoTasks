import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Task } from 'zone.js/lib/zone-impl';
import { Task } from '../../dashboard/interfaces/task';
import { log } from 'console';
import { TasksService } from '../../dashboard/services/tasks.service';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  updatedTaskName!: string;
  task!: Task;
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tasksService:TasksService
  ) {
    this.task = data.task[0];
    console.log(data );


  }

  onClose(): void {
    this.dialogRef.close(this.data);
  }

  onSaveClick(): void {
    this.dialogRef.close({ ...this.data, name: this.updatedTaskName });
  }

  updateTask(task:Task){
    this.tasksService.updateTask(task)
  }
}
