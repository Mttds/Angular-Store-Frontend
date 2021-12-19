import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProductToAdd } from '../models/ProductToAdd';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject();

  constructor() { }

  /*
  Retrieves the product added by the user
  from the Product list or Product detail page.
  The cart component will subscribe to this event
  which yields an observable.
  */
  getProduct(): Observable<ProductToAdd> {
    console.log("Retrieving product...");
    console.log(this.subject.asObservable());
    return (this.subject.asObservable() as Observable<ProductToAdd>);
  }

  /*
  Adds the retrieved product to the cart.
  The product-item and product-item-details components
  will call this method using the private CartService
  injected in the component to send the desired Product
  object to the subject event stream.
  */
  addProduct(product: Product) {
    console.log(product);
    const productToAdd: ProductToAdd = {
      name: product.name,
      quantity: 1,
      url: product.url,
      description: product.description,
      price: product.price
    }
    this.subject.next(productToAdd);
  }
}
