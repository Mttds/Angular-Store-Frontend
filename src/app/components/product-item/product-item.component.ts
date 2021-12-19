import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product; // Passing Data From Parent to Child with a decorator: @Input

  constructor(private cartService: CartService) {
    // initialize product class variable
    this.product = {
      name: '',
      type: '',
      category: '',
      weight: 0,
      description: '',
      url: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addProduct(this.product);
  }
}
