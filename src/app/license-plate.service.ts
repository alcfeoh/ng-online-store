import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from './license-plate';

@Injectable()
export class LicensePlateService {

  constructor(private http: HttpClient) { }

  getAllPlates(): Observable<LicensePlate[]> {
      return this.http.get<LicensePlate[]>('http://localhost:8000/data');
  }

}
