import { Component } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private searchService:SearchServiceService){}

  onSearch(target: EventTarget | null) {
    const inputElement = target as HTMLInputElement;
    const query = inputElement.value;
    this.searchService.setSearchQuery(query)
    console.log(query);

  }
}
