import { Component } from '@angular/core';
import {LicensePlateService} from '../license-plate.service';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';

@Component({
  selector: 'ngs-store',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  plates: Observable<LicensePlate[]>;

  constructor(private plateService: LicensePlateService, private cartService: CartService) {
    this.plates = plateService.getAllPlates();
  }

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate)
      .subscribe(done => alert(`Plate '${plate.title}' added to cart`));
  }
}
