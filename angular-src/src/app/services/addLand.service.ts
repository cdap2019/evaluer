import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Response } from '@angular/http';

@Injectable()
export class AddLandService {

  requestOptions = new RequestOptions();
  constructor(private http: HttpClient) { }

  addLand(id,price, distance, route, aindex, province, district, address, lat, lon) {
    console.log(id);
    const uri = 'http://localhost:8080/lands/add';
    const obj = {
      user : id,
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

  getLands() {
    const uri = 'http://localhost:8080/lands';
    return this.http.get(uri).map(res =>res);
  }

 getCurrentPrice(lat,lng)
 {
  const data = {
    lat: lat,
    lng: lng,
  };
  // return this.http.post('users/send_current', data).subscribe((current_price)=>
  // alert(current_price));

      return this.http.post('users/send_current',data);
      // .map((response: Response) => response.json());
 }

 getPriceFromDb(address)
 {
  // const data = {
  //   lat: lat,
  //   lng: lng,
  // };
  // return this.http.post('users/send_current', data).subscribe((current_price)=>
  // alert(current_price));

      return this.http.post('users/send_current',data);
      // .map((response: Response) => response.json());
 }
}