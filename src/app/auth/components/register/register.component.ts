import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
 
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(){}
  registerForm: FormGroup<any> = new FormGroup(
    {first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
        age:new FormControl(null,[Validators.required,Validators.min(18),Validators.maxLength(90)]),
          password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)])

          });
        // }
submitRegisterForm(registerForm:FormGroup){
console.log(registerForm.value);
localStorage.setItem('userValue',JSON.stringify(this.registerForm.value))



}

}
