import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() fullName: string;
  @Input() price: number;
  @Input() shippingAddress: string;

  constructor() { 
    this.fullName = '';
    this.price = 0;
    this.shippingAddress = '';
  }

  ngOnInit(): void {
  }
}
