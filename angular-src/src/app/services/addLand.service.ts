import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddLandService {

  constructor(private http: HttpClient) { }

  addLand(price, distance, route, aindex, province, district, address, lat, lon) {
    const uri = 'http://localhost:8080/lands/add';
    const obj = {
      price: price,
      distance: distance,
      route: route,
      index: aindex,
      // tslint:disable-next-line:whitespace
      province:province,
      district: district,
      address: address,
      lat: lat,
      lon: lon,
    };
    this.http.post(uri,obj)
        .subscribe(res => console.log(res));
  }
}