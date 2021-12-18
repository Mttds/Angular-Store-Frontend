import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail', // unique identifier that we can use in templates (HTML)
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  id: number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the param :id from the ActivatedRoute (see src/app/app-routing.module.ts to check for routes and params)
    // we do not need to subscrive the the ActivatedRoute observable because the url will not change in the product-item-detail template view
    this.id = ((this.route.snapshot.paramMap.get('id') as unknown) as number);
    this.productService.getProductById(this.id).subscribe(res => {
      if(res.url == "" || res.url == null) {
        res.url = "./assets/image-not-found.png";
      }
      this.product = res;
    })
  }

}
