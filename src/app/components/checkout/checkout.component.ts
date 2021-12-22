import { Component, OnInit } from '@angular/core';
import { ProductToAdd } from 'src/app/models/ProductToAdd';
import { CartService } from 'src/app/services/cart.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalAmount: number = 0;
  isSubmitted: boolean = false;
  fullName: string = '';
  address: string = '';
  creditCardNumber: number = 0;
  cartItems: ProductToAdd[] = this.cartService.getCartItems();
  constructor(private cartService: CartService, /*private router: Router*/) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.cartItems.forEach(i => {
      this.totalAmount += (i.quantity * i.price)
    })
  }

  emptyCart(): void {
    this.cartItems = this.cartService.emptyCart();
  }

  submitForm(): void {
    // empty the cart before confirming the order
    this.emptyCart();
    this.isSubmitted = true;
    //this.router.navigate(['/confirmation']);
  }
}
