import { Component } from '@angular/core';
import { ForeclosureComponent } from "../foreclosure/foreclosure.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay-loan',
  standalone: true,
  imports: [ForeclosureComponent, FormsModule],
  templateUrl: './pay-loan.component.html',
  styleUrl: './pay-loan.component.scss'
})
export class PayLoanComponent {

  loanAmt : string = '';
  foreAmount : any = 'dfjbdsjf';

  getData(val:any){
    this.foreAmount = val;
  }
}
