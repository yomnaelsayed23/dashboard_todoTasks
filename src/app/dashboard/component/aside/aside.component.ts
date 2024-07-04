import { Component } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    RouterLink,
   NgIf
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  showComponent: boolean = false;
  constructor(private router:Router, private authService:AuthService){}

  logout(){
    this.authService.logout()
    console.log("logout");
    
  }

  toggleComponent() : void {
   
      this.showComponent = !this.showComponent;
    }
  }

