import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { DashbordHomeComponent } from '../../../dashboard/component/dashbord-home/dashbord-home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  RouterLink,
  RegisterComponent,
  RouterLink,
  DashbordHomeComponent,
  ReactiveFormsModule,
  NgIf,
  DashbordHomeComponent,


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router:Router){}

loginForm :FormGroup = new FormGroup({
email: new FormControl (null,[Validators.required,Validators.email]),
password : new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z]/)])
});


submitLogin(loginForm:FormGroup){
  console.log(loginForm);

   if (this.loginForm.valid) {
  localStorage.setItem('email', JSON.stringify(this.loginForm.get('email')?.value));
  localStorage.setItem('password',  JSON.stringify(this.loginForm.get('password')?.value));

  this.router.navigate(['/dashboard']);
  console.log(loginForm.value);

}
}
}
