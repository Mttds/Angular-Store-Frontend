import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart', // unique identifier that we can use in templates (HTML)
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
