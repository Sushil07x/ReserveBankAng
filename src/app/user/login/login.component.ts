import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { apiUrls } from '../../constants/globalConstants';
import { ApiService } from '../../services/api.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgbAlertModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm : FormGroup;
  errMsg : string = '';
  constructor(private apiService: ApiService, private router:Router,
    private sessionService: SessionService
  ){

    this.loginForm = new FormGroup(
      {userName : new FormControl('', [Validators.maxLength(10), Validators.required]),
        pswd : new FormControl('', Validators.required)
       }
    );
  }

  checkLogin(){
    this.errMsg = '';
    console.log(this.loginForm);
    
    console.log(this.loginForm.get('userName')?.value);
    console.log(this.loginForm.get('pswd')?.value);
    console.log(this.loginForm.status);

    if(this.loginForm.status == 'VALID'){
      let apiUrl = apiUrls.userApi + '?userName=' + this.loginForm.get('userName')?.value + '&password=' + this.loginForm.get('pswd')?.value;
      this.apiService.getData(apiUrl).subscribe(
        (responseData:any) => {
          console.log(responseData);
          if(responseData.length > 0){
            this.sessionService.setUserSession(responseData[0]);
            // sessionStorage.setItem('UserId', responseData[0].id);
            // sessionStorage.setItem('UserName', responseData[0].userName);            
            // sessionStorage.setItem('UserType', responseData[0].userType);
            this.router.navigate(['/viewAcc']);
          }else{
            this.errMsg = 'User doesnot exists / Password not matched..';
          }
        },
        err => { console.log(err); }
      );
    }

    
  }

}
  