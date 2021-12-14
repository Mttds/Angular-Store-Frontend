import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  /*
  1) Have the Product component's HTML template render the new <app-product-item>
  2) Use ngFor to iterate over the posts collection
  3) Use input property binding to pass product data to the child component
  4) Have the (child) PostItem component HTML template render product data

  Parent components can not only render their child components but also pass data directly down to them.
  Using the @Input decorator in the child and property binding in the parent component, we can facilitate the flow of data from parent to child.
  */
  @Input() product: Product; // Passing Data From Parent to Child with a decorator: @Input

  constructor() {
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
}
