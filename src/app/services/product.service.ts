import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const PRODUCTS_API_URL = "http://localhost:3000/products";

/*
Under the hood, the new service is being registered with the "root" injector of the application.
This makes the service readily available to be consumed anywhere in our application, be it a component, a module, or even another service.
*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // Get data from the backend API, products endpoint which
    // returns a list of products
    const url = PRODUCTS_API_URL;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable<Product> {
    // Get data of a single product looking up by id
    // form the backend API endpoint product/:id
    // returns a single Product
    const url = PRODUCTS_API_URL + `/${id}`;
    return this.http.get<Product>(url);
  }
}
