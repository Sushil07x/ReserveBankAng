import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApplyloanComponent } from "./loan/applyloan/applyloan.component";
import { CreateAccountComponent } from "./account/create-account/create-account.component";
import { ViewaccountComponent } from "./account/viewaccount/viewaccount.component";
import { AccountAdminComponent } from "./account/account-admin/account-admin.component";
import { DefineRuleComponent } from "./bankRules/define-rule/define-rule.component";
import { RuleAdminComponent } from "./bankRules/rule-admin/rule-admin.component";
import { LoanAdminComponent } from "./loan/loan-admin/loan-admin.component";
import { ViewLaonComponent } from "./loan/view-laon/view-laon.component";
import { PayLoanComponent } from "./loan/pay-loan/pay-loan.component";
import { RupeeAdminComponent } from "./rupee/rupee-admin/rupee-admin.component";
import { RupeerequestComponent } from "./rupee/rupeerequest/rupeerequest.component";
import { CloseAccountComponent } from "./account/close-account/close-account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApplyloanComponent, CreateAccountComponent, ViewaccountComponent, AccountAdminComponent, DefineRuleComponent, RuleAdminComponent, LoanAdminComponent, ViewLaonComponent, PayLoanComponent, RupeeAdminComponent, RupeerequestComponent, CloseAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'ReserveBank';
}
