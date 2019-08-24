import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
declare var google;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// export class DashboardComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
//   lat = 6.9271;
//   lng = 79.8612;
//   selectedMarker;
//   selectedLat;
//   selectedLng;
//   markers = [
//     // { lat: 22.33159, lng: 105.63233, alpha: 1 },
//     // { lat: 7.92658, lng: -12.05228, alpha: 1 }
//   ];

//   addMarker(lat: number, lng: number) {
//     // this.markers.push({ lat, lng, alpha: 0.4 });
//     console.log(lat + '' + lng);
//     this.selectedLat = lat;
//     this.selectedLng = lng;

//   }

//   // max(coordType: 'lat' | 'lng'): number {
//   //   return Math.max(...this.markers.map(marker => marker[coordType]));
//   // }

//   // min(coordType: 'lat' | 'lng'): number {
//   //   return Math.min(...this.markers.map(marker => marker[coordType]));
//   // }

//   // selectMarker(event) {
//   //   this.selectedMarker = {
//   //     lat: event.latitude,
//   //     lng: event.longitude
//   //   };
//   // }
// }
export class DashboardComponent implements OnInit {

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
 
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) { }

  ngOnInit() { 
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
          this.setCurrentLocation();
          this.geoCoder = new google.maps.Geocoder;
     
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ["address"] , componentRestrictions: {country: 'lk'}
          });
          autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
     
              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }
     
              //set latitude, longitude and zoom
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.zoom = 12;
            });
          });
        });
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 8;
          this.getAddress(this.latitude, this.longitude);
        });
      }
    }
   
   
    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
      this.getAddress(this.latitude, this.longitude);
    }
   
    getAddress(latitude, longitude) {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
   
      });
    }

}