import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddLandService } from 'app/services/addLand.service';
import { Router } from '@angular/router';
declare var google;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  user = localStorage.getItem('user');
  userId = JSON.parse(this.user);
  private geoCoder;
 
  @ViewChild('address')
  public searchElementRef: ElementRef;
  angForm: FormGroup;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, 
    private fb: FormBuilder,
    private addLandService: AddLandService,
    private router: Router
    ) {
    this.createForm();
    // var test = JSON.parse(this.user);
    // console.log(test.id);
   }
 
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

    createForm() {
      this.angForm = this.fb.group({
        price: ['', Validators.required ],
        distance: ['', Validators.required ],
        route: ['', Validators.required ],
        aindex: ['', Validators.required ],
        province: ['', Validators.required ],
        district: ['', Validators.required ],
        address: ['', Validators.required ],
        lat: ['', Validators.required ],
        lon: ['', Validators.required ]
      });
    }
    
   
    addLandInfo(price, distance, route, aindex, province, district, address, lat, lon) {
    const id = this.userId.id;
    console.log(id);
      this.addLandService.addLand(id ,price, distance, route, aindex, province, district, address, lat, lon);
      this.router.navigate(['/profile']);
  }
}