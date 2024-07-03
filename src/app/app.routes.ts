import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { DashbordHomeComponent } from './dashboard/component/dashbord-home/dashbord-home.component';
// import {login}

export const routes: Routes = [
  // {path:"/",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashbordHomeComponent},
  {path:"**",redirectTo:"login",pathMatch:'full'}
];
