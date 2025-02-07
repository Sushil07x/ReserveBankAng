import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'ReserveBank';
  isSessionAvailable : boolean = false;
  //router: Router = new Router;

  //Dependency Injection
  constructor(private router:Router, public sessionService:SessionService){}
  ngOnInit(): void {
    
    this.isSessionAvailable = this.sessionService.isSessionAvailable();
  }

  gotoRupeeAdmin(){
    this.router.navigate(['/rupeeAdmin']);
  }
}