import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApplyloanComponent } from "./loan/applyloan/applyloan.component";
import { CreateAccountComponent } from "./account/create-account/create-account.component";
import { ViewaccountComponent } from "./account/viewaccount/viewaccount.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApplyloanComponent, CreateAccountComponent, ViewaccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'ReserveBank';
}
