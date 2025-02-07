import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.scss'
})
export class ViewAccountComponent implements OnInit{

  constructor(private apiService:ApiService, private sessionService: SessionService){}

  ngOnInit(): void {
    this.sessionService.validateUserSession();
    this.getAccountData();
  }

  accountData : any;
  getAccountData(){
    let apiUrl = "https://retoolapi.dev/Gm4XDJ/RBIAccount";
    this.apiService.getData(apiUrl).subscribe(
      (responseData:any)=>{
        this.accountData = responseData;
      },
      err => { console.log(err)}
    );
  }
}
