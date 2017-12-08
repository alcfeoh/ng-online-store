import { Component } from '@angular/core';
import {LicensePlateService} from './license-plate.service';
import {LicensePlate} from './license-plate';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  licensePlates: LicensePlate[];

  constructor(private service: LicensePlateService) {
    service.getAllPlates().subscribe(plates => this.licensePlates = plates);
  }

  addToCart(event: LicensePlate): void {
    alert(`License plate '${event.title}' added to cart`);
  }
}
