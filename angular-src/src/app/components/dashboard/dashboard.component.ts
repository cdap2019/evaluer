import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  lat = 6.9271;
  lng = 79.8612;
  selectedMarker;
  selectedLat;
  selectedLng;
  markers = [
    // { lat: 22.33159, lng: 105.63233, alpha: 1 },
    // { lat: 7.92658, lng: -12.05228, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    // this.markers.push({ lat, lng, alpha: 0.4 });
    console.log(lat + '' + lng);
    this.selectedLat = lat;
    this.selectedLng = lng;

  }

  // max(coordType: 'lat' | 'lng'): number {
  //   return Math.max(...this.markers.map(marker => marker[coordType]));
  // }

  // min(coordType: 'lat' | 'lng'): number {
  //   return Math.min(...this.markers.map(marker => marker[coordType]));
  // }

  // selectMarker(event) {
  //   this.selectedMarker = {
  //     lat: event.latitude,
  //     lng: event.longitude
  //   };
  // }
}
