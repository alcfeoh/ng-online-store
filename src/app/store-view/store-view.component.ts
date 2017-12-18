import { Component } from '@angular/core';
import {LicensePlateService} from '../license-plate.service';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from '../license-plate';

@Component({
  selector: 'ngs-store',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  plates: Observable<LicensePlate[]>;

  constructor(private service: LicensePlateService) {
    this.plates = service.getAllPlates();
  }
}
