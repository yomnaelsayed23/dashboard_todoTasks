import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private searchSubject = new BehaviorSubject<string>('')
 search$ = this.searchSubject.asObservable();


  setSearchQuery(query: string){
    this.searchSubject.next(query)
  }

}
