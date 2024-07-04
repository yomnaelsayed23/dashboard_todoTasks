import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm = this.searchTermSubject.asObservable();

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
