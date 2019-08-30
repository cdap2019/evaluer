import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import {isBoolean} from "util";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhMmYzNTU2M2UyMjBhOTQ5YjBmOTIiLCJlbWFpbCI6ImoxYW4uaG9uZ0B5YW5kZXguY29tIiwibmFtZSI6ImJyYXMiLCJleHAiOjE1NjY4MzI4OTIsImlhdCI6MTU2NjIyODA5Mn0.DfPAVVsaNCV3urx35HQdWIeXTV4ybe3lVQl4E_aA37M'
  })
};

declare var google: any;

function test(pl) {
  LandPriceComponent.credentials.lat = pl.geometry.location.lat();
  LandPriceComponent.credentials.lng = pl.geometry.location.lng();
}

function future(av, nu) {
  LandPriceComponent.credentials.av_list.push(av)
  LandPriceComponent.credentials.nu_list.push(nu)
  console.log(LandPriceComponent.credentials.av_list);
  console.log(LandPriceComponent.credentials.nu_list);
}

@Component({
  selector: 'app-land-price',
  templateUrl: './land-price.component.html',
  styleUrls: ['./land-price.component.css']
})
export class LandPriceComponent implements OnInit {

  public static credentials = {
    lat: '',
    lng: '',
    av_list: new Array(),
    nu_list: new Array()
  };
  public prices = {
    current_price: '',
    future_price: 'Predict...',
    school_percent: 'Percent of School',
    hospital_percent: 'Percent of Hospital',
    supermarket_percent: 'Percent of Supermarket',
    road_percent: 'Percent of Road',
    apartment_percent: 'Percent of Apartment',
  }

  @ViewChild( "mapRed") mapRed: ElementRef;
  constructor(private http: HttpClient) { }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
    this.initAutocomplete();
  }

  initAutocomplete() {

    var map = new google.maps.Map(this.mapRed.nativeElement, {
      center: {lat: 6.9271, lng: 79.8621},
      zoom: 14,
      mapTypeId: 'roadmap'
    });

    var input = document.getElementById('pac-input');

    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    searchBox.addListener('places_changed', function () {

      LandPriceComponent.credentials.av_list = [];
      LandPriceComponent.credentials.nu_list = [];
      var places = searchBox.getPlaces();
      markers = [];
      var bounds = new google.maps.LatLngBounds();
      for ( var i = 0; i < places.length; i++) {
        var place = places[i];
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.union(place.geometry.location);
        }
        var service = new google.maps.places.PlacesService(map);
        var building =['school','hospital','supermarket','road','apartment'];
        test(place);
        for (var i=0;i<building.length;i++) {
          service.nearbySearch(
            {location: place.geometry.location, radius: 1000, type: building[i]},
            function (results, status) {
              // alert(results.length)
              if (results.length == 0) {future(0,0)}
              else {
                if (status !== 'OK') return;
                // alert(results[0].geometry.location.lat());
                var rad = function (x) {
                  return x * Math.PI / 180;
                };
                // let number: number = 0;
                let total_distance: number = 0;
                let average_distance: number = 0;
                let build_number: number = 0;
                // let passed: array = [];
                var passed=[];
                var filterDistance = function (p) {
                  var R = 6378137; // Earth’s mean radius in meter
                  var dLat = rad(p.geometry.location.lat() - place.geometry.location.lat());
                  var dLong = rad(p.geometry.location.lng() - place.geometry.location.lng());
                  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(place.geometry.location.lat())) * Math.cos(rad(p.geometry.location.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                  var d = R * c;
                  return d; // returns the distance in meter
                };
                // alert(results.length);
                for(var j=0; j<results.length; j++)
                {
                  if(filterDistance(results[j]) < 1000) {
                    total_distance += filterDistance(results[j]);
                    build_number += 1;
                    passed.push(results[j]);
                  }
                }
                if( build_number!==0) {
                  average_distance = total_distance / build_number;
                  // alert(average_distance);alert(build_number);
                  future(average_distance, build_number);
                }
                else {
                  average_distance = 0;
                  future(average_distance, build_number);
                }
                for (var i = 0; i< passed.length; i++) {
                  var image = {
                    url: passed[i].icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                  };
                  var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    title: passed[i].name,
                    position: passed[i].geometry.location

                  });
                  bounds.extend(passed[i].geometry.location);
                }
                map.fitBounds(bounds);
                map.setZoom(15);
              }
            }
          )
        }
      }
    });

    // alert(json);
  }
  send_current_position(json) {
    // alert(LandPriceComponent.credentials.lat);
    var data = {
      lat: '',
      lng: ''
    };
    data.lat = LandPriceComponent.credentials.lat;
    // alert(data.lat);
    data.lng = LandPriceComponent.credentials.lng;
    // alert(data.lng);
    return this.http.post('users/send_current', data, httpOptions).subscribe((current_price)=>
    {console.log(current_price), this.prices.current_price = parseInt(current_price[0]).toString();});

  }

  send_data(){
    // alert('OK');
    var data = {
      av: [],
      nu: [],
      current: ''
    };
    data.av = LandPriceComponent.credentials.av_list;
    // alert(data.av[4]);
    data.nu = LandPriceComponent.credentials.nu_list;
    data.current = this.prices.current_price;
    return this.http.post('users/send_future', data, httpOptions).subscribe((future_price)=>
    {console.log(future_price), this.prices.future_price = parseInt(future_price[5]).toString() ,this.prices.school_percent = (future_price[0]*100).toString().slice(0,5),
      this.prices.hospital_percent = (future_price[1]*100).toString().slice(0,5), this.prices.supermarket_percent = (future_price[2]*100).toString().slice(0,5), this.prices.road_percent = (future_price[3]*100).toString().slice(0,5),
      this.prices.apartment_percent = (future_price[4]*100).toString().slice(0,5)
    ;});
  }
}





