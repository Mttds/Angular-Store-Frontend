import { Injectable } from '@angular/core';
//import { Subject, Observable } from 'rxjs';
import { ProductToAdd } from '../models/ProductToAdd';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //subject = new Subject();
  cartItems: ProductToAdd[] = [];

  constructor() { }

  /**
   * Retrieves the product added by the user
   * from the Product list or Product detail page.
   * The cart component will subscribe to this event
   * which yields an observable.    
   */
  /*getProduct(): Observable<ProductToAdd> {
    console.log("Retrieving product...");
    console.log(this.subject.asObservable());
    return (this.subject.asObservable() as Observable<ProductToAdd>);
  }*/

  /**
   * Returns the products in the cart
   */
  getCartItems(): ProductToAdd[] {
    return this.cartItems;
  }

  /**
   * Removes all items in the cart
   */
  emptyCart(): ProductToAdd[] {
    this.cartItems = [];
    return this.cartItems;
  }

  /**
   *  Adds the retrieved product to the cart.
   *  The product-item and product-item-details components
   *  will call this method using the private CartService
   *  injected in the component to send the desired Product
   *  object to the subject event stream.
   */
  addProduct(product: Product, quantity: number): boolean {
    if(quantity == 0) {
      window.alert("Please select a valid quantity value from the dropdown list.");
      return false;
    }

    //console.log(product);
    const productToAdd: ProductToAdd = {
      name: product.name,
      quantity: quantity,
      url: product.url,
      description: product.description,
      price: product.price
    }

    // check if there is already this product in the cart
    // if it's the case just update its quantity
    let productInCart = this.cartItems.find(p => p.name === product.name);

    if(productInCart == undefined) {
      //this.subject.next(productToAdd);
      this.cartItems.push(productToAdd);
    }
    else {
      console.log("Item already in cart!");
      console.log(`Adding ${productInCart.quantity} and ${quantity}`);
      const currentQuantity: number = productInCart.quantity;
      const newQuantity: number = +currentQuantity + +quantity;
      console.log(newQuantity);
      productInCart.quantity = newQuantity;
    }
    return true;
  }
}
