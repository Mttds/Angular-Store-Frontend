import { Component, OnInit } from '@angular/core';
import { ProductToAdd } from 'src/app/models/ProductToAdd';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart', // unique identifier that we can use in templates (HTML)
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;
  cartItems: ProductToAdd[] = [
    {
      name: "test",
      description: "test",
      price: 9.99,
      url: "",
      quantity: 1
    },
    {
      name: "test2",
      description: "test2",
      price: 10.99,
      url: "",
      quantity: 2
    }
  ]; // contains the products added to the cart
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res => {
      this.cartItems.push(res);
      this.totalAmount = 0; // reset to 0 before calculating it
      this.cartItems.forEach(i => {
        this.totalAmount += (i.quantity * i.price)
      })
    })
  }

  removeItem(item: ProductToAdd): void {
    this.cartItems = this.cartItems.filter(i => i.name !== item.name);
  }
}
