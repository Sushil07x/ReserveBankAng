import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm : FormGroup;
  constructor(){

    this.loginForm = new FormGroup(
      {userName : new FormControl('', Validators.maxLength(10)),
        pswd : new FormControl('', Validators.required)
       }
    );
  }

  checkLogin(){
    console.log(this.loginForm);
    
    console.log(this.loginForm.get('userName')?.value);
    console.log(this.loginForm.status);
  }

}
