import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../dashboard/interfaces/task';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(tasks: Task[],trim: string[]) {
    // return tasks.filter((task) => task.title.toLowerCase().includes(trim.toLocaleString()));
  }

}
