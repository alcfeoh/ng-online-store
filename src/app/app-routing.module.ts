import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreViewComponent} from './store-view/store-view.component';
import {CartViewComponent} from './cart-view/cart-view.component';

const routes: Routes = [
  {path: '', component: StoreViewComponent},
  {path: 'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
