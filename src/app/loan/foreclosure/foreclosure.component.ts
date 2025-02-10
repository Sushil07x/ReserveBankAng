import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foreclosure',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './foreclosure.component.html',
  styleUrl: './foreclosure.component.scss'
})
export class ForeclosureComponent implements OnInit{

  @Input() loanAmt: any;
  foreAmount : string = '';
  @Output() sendData :EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.foreAmount = "";
  }

  send(){
    this.sendData.emit(this.foreAmount);
  }
}
