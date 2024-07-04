import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  logout():void{
    // Remove email and password from localStorage
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Navigate to the login component
    this.router.navigate(['/login']);
 }
 isLoggedIn(): boolean {
  // Check if email and password exist in localStorage
  return !!localStorage.getItem('email') && !!localStorage.getItem('password');
}
}
