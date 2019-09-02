import { MapsAPILoader } from '@agm/core';
import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { AddLandService } from 'app/services/addLand.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latitude: number;
  longitude: number;
  address:any;
  @ViewChild('search') public searchElement: ElementRef;

  // tslint:disable-next-line:max-line-length
  constructor(private spinner: NgxSpinnerService,private router: Router,private addLandService:AddLandService ,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(
    () => {
    // tslint:disable-next-line: max-line-length
    let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,{types: ["address"] , componentRestrictions: {country: 'lk'}});

    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.address = autocomplete.getPlace().address_components[0].long_name;
        if(place.geometry === undefined || place.geometry === null ){
          return;
        }
         //set latitude, longitude and zoom
         this.latitude = place.geometry.location.lat();
         this.longitude = place.geometry.location.lng();
        //  console.log( this.latitude);
        //  console.log( this.longitude);
      });
    });
    }
    );
 }

 predictPrice()
 {
  this.spinner.show();
  // this.addLandService.getCurrentPrice(this.latitude, this.longitude);
  this.addLandService.getCurrentPrice(this.latitude, this.longitude).subscribe(
    data => { console.log(data[0]); // Data which is returned by call
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['./','prediction'],{ queryParams: { page: data[0],page1:this.address,lat:this.latitude,lng:this.longitude}, skipLocationChange: true });
      }, 4000);
    },
    error => { console.log(error); // Error if any
    },
    // ()=> // Here call is completed. If you wish to do something 
    // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
  );


 }


}
