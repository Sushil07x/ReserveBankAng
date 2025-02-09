import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(private sessionService: SessionService){}

  ngOnInit() {
    this.sessionService.logoutSession();
  }
}