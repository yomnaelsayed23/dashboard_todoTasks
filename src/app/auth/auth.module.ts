import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    ReactiveFormsModule,
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
