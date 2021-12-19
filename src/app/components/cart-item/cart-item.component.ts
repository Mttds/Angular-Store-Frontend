import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductToAdd } from 'src/app/models/ProductToAdd';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: ProductToAdd;
  @Output() removeItem: EventEmitter<ProductToAdd> = new EventEmitter;
  constructor() { 
    this.cartItem = new ProductToAdd();
  }

  ngOnInit(): void {
  }

  remove(cartItem: ProductToAdd): void {
    this.removeItem.emit(cartItem);
  }

}
