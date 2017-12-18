import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from './license-plate';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/cart');
  }

}
