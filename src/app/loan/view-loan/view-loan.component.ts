import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-loan.component.html',
  styleUrl: './view-loan.component.scss'
})
export class ViewLoanComponent {

  loans = [{ loanId:111, amt:1230}, { loanId:112, amt:1500}, { loanId:113, amt:5000}]
}
