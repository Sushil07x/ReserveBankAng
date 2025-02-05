import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-admin.component.html',
  styleUrl: './rule-admin.component.scss'
})
export class RuleAdminComponent implements OnInit {


  apiUrl = "https://retoolapi.dev/qRO2OP/rbiRules";
  rulesDetails :any;
  ruleStatuses = ['Approved', 'Rejected', 'Initiated'];
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
   this.getRulesDetails();
  }

  getRulesDetails(){
    this.apiService.getData(this.apiUrl).subscribe(
      (responseData) => {
        this.rulesDetails = responseData;
        console.log(this.rulesDetails);
      },
      err => { console.log(err); }
    );
  }

  updateRule(record:any, statusType:string){
    let requestBody = record;
    if(statusType == 'approved')
      requestBody.status = "Approved";
    else
      requestBody.status = "Rejected";

      requestBody.approvedBy = 'Anbu';
    this.apiService.updateData(this.apiUrl, requestBody, record.id).subscribe(
      () => { 
        alert("Rule is successfully updated..");
      },
      err => { console.log(err)}
    );
  }


}
