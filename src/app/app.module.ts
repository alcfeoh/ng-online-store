import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { LicensePlateService } from './license-plate.service';
import {HttpClientModule} from '@angular/common/http';
import { CartService } from './cart.service';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';
import {FormsModule} from '@angular/forms';
import { CreditCardImageDirective } from './credit-card-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    LicensePlateComponent,
    JumbotronComponent,
    StoreViewComponent,
    CartViewComponent,
    CheckoutFormComponent,
    CheckoutViewComponent,
    CreditCardImageDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule, AppRoutingModule, FormsModule
  ],
  providers: [LicensePlateService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
