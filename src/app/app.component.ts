import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AccountAdminComponent } from "./account/account-admin/account-admin.component";
import { ApplyLoanComponent } from "./loan/apply-loan/apply-loan.component";
import { CloseAccountComponent } from "./account/close-account/close-account.component";
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from "./account/create-account/create-account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AccountAdminComponent, ApplyLoanComponent, CloseAccountComponent, FormsModule, CreateAccountComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'ReserveBank';
  //router: Router = new Router;

  //Dependency Injection
  constructor(private router:Router){}

  gotoRupeeAdmin(){
    this.router.navigate(['/rupeeAdmin']);
  }
}