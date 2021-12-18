import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list', // unique identifier that we can use in templates (HTML)
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_list: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      for(let i = 0; i < res.length; i++) {
        const product = res[i];
        //console.log(product);
        if(product.url == "" || product.url == null) {
          product.url = "./assets/image-not-found.png"
        }
      }
      this.product_list = res;
      //console.log(this.product_list);
    })
  }

  /*
  1) "Capture" the hidePost emitted event and data via output property binding in the Posts component HTML template
  2) Create a hidePost() method in the Post component class that filters out the post passed up from the PostItem child component class
  */
  hideProduct(product: Product): void {
    this.product_list = this.product_list.filter(p => p.id !== product.id);
  }

  addProduct(product: Product): void {
    this.product_list.unshift(product);
    window.alert("Item added to the cart!");
  }
}
