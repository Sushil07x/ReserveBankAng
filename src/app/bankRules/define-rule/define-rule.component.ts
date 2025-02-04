import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-define-rule',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './define-rule.component.html',
  styleUrl: './define-rule.component.scss'
})
export class DefineRuleComponent {

  ruleName :string = '';
  ruleDesc :string = '';
  ruleProposer : string = '';
  ruleRegion : string = '';
  apiUrl : string = 'https://retoolapi.dev/qRO2OP/rbiRules';
  constructor(private apiService: ApiService){}

  createRule(){
    let requestBody = {
      ruleName : this.ruleName,
      ruleDesc : this.ruleDesc,
      ruleProposer : this.ruleProposer,
      ruleRegion : this.ruleRegion,
      status : "Initiated",
      approvedBy :""
    }
    this.apiService.createData(this.apiUrl, requestBody).subscribe(
      ()=> {
        alert("Rule submitted Successfully...");
      },
      err => { console.log(err); }
    );

  }
}
