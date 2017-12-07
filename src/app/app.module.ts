import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { LicensePlateService } from './license-plate.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LicensePlateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [LicensePlateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
