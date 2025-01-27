import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  accountName = "HDFC";
  bkName = "";
  headOffc = "";
  noOfBranches = 0;
  totalBal = 0;
  exectedGrowthRate = 0;
  noOfCustomers = 0;

  registerBank(){
    let requestBody = {
      bankName : this.bkName,
      headOffc : this.headOffc,
      noOfBranches : this.noOfBranches,
      totalBal : this.totalBal,
      expectedGrowthRate : this.exectedGrowthRate,
      noOfCustomers : this.noOfCustomers
    }

    console.log(requestBody);
  }
}
