import { Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AccountAdminComponent } from './account/account-admin/account-admin.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';
import { CloseAccountComponent } from './account/close-account/close-account.component';
import { Component } from '@angular/core';
import { DefineRuleComponent } from './bankRules/define-rule/define-rule.component';
import { RuleAdminComponent } from './bankRules/rule-admin/rule-admin.component';
import { ApplyLoanComponent } from './loan/apply-loan/apply-loan.component';
import { LoanAdminComponent } from './loan/loan-admin/loan-admin.component';
import { PayLoanComponent } from './loan/pay-loan/pay-loan.component';
import { ViewLoanComponent } from './loan/view-loan/view-loan.component';
import { RupeeAdminComponent } from './rupees/rupee-admin/rupee-admin.component';
import { RupeeRequestComponent } from './rupees/rupee-request/rupee-request.component';

export const routes: Routes = [
    {path:'createAcc', component:CreateAccountComponent},
    {path:'accAdmin', component:AccountAdminComponent},
    {path:'viewAcc', component:ViewAccountComponent},
    {path:'closeAcc', component:CloseAccountComponent},
    {path:'defnieRule', component:DefineRuleComponent},
    {path:'ruleAdmin', component:RuleAdminComponent},
    {path:'applyLoan', component:ApplyLoanComponent},
    {path:'loanAdmin', component:LoanAdminComponent},
    {path:'payLoan', component:PayLoanComponent},
    {path:'viewLoan', component:ViewLoanComponent},
    {path:'rupeeAdmin', component:RupeeAdminComponent},
    {path:'rupeeReq', component:RupeeRequestComponent}
];
