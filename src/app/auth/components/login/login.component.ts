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


  // FormGroup,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 loginData:any;

constructor(private _router:Router){}

loginForm :FormGroup = new FormGroup({
email: new FormControl (null,[Validators.required,Validators.email]),
password : new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z]/)])
});


ngOnInit() {
  if (typeof localStorage !== 'undefined') {
    const storedDataString = localStorage.getItem('userValue');
    if (storedDataString) {
      this.loginData = JSON.parse(storedDataString);
    }
  }
}

//

submitLogin(loginForm:FormGroup){
if (loginForm.valid) {
  const {email,password} = this.loginForm.value
  if (this.loginData && email===this.loginData.email && password=== this.loginData.password) {
    this._router.navigate(['/dashboard'])

  }else{
    this._router.navigate(['/login'])

  }

}
}
}
