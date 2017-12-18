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


@NgModule({
  declarations: [
    AppComponent,
    LicensePlateComponent,
    JumbotronComponent,
    StoreViewComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule, AppRoutingModule
  ],
  providers: [LicensePlateService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
