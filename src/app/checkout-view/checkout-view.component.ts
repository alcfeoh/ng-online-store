import { Component } from '@angular/core';
import {LicensePlateService} from '../license-plate.service';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';

@Component({
  selector: 'ngs-store',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent {

  constructor(private cartService: CartService) {

  }
}
