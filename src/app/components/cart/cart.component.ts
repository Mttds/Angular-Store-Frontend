import { Component, OnInit } from '@angular/core';
import { ProductToAdd } from 'src/app/models/ProductToAdd';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart', // unique identifier that we can use in templates (HTML)
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;
  cartItems: ProductToAdd[] = this.cartService.getCartItems();
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    /*this.cartService.getProduct().subscribe(res => {
      this.cartItems.push(res);
      this.totalAmount = 0; // reset to 0 before calculating it
      this.cartItems.forEach(i => {
        this.totalAmount += (i.quantity * i.price)
      })
    })*/
    this.cartItems.forEach(i => {
      this.totalAmount += (i.quantity * i.price)
    })
  }

  emptyCart(): void {
    this.cartItems = this.cartService.emptyCart();
  }

  checkOut(): void {
    this.router.navigate(['/checkout']);
  }

  removeItem(item: ProductToAdd): void {
    const index: number = this.cartItems.indexOf(item, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.totalAmount -= item.quantity * item.price;
  }
}
