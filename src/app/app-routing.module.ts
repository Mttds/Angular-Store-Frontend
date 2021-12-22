import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
//import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }, // do not put a "/" for the root of the application, but rather leave it empty
  { path: 'cart', component: CartComponent },
  //{ path: 'confirmation', component: ConfirmationComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
