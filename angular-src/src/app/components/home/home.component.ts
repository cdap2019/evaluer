import { MapsAPILoader } from '@agm/core';
import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { PredictionService } from 'app/services/prediction.service';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latitude: number;
  longitude: number;
  @ViewChild('search') public searchElement: ElementRef;

  // tslint:disable-next-line:max-line-length
  constructor(private router:Router,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private predictionService: PredictionService) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(
    () => {
    // tslint:disable-next-line: max-line-length
    let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,{types: ["address"] , componentRestrictions: {country: 'lk'}});

    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        if(place.geometry === undefined || place.geometry === null ){
          return;
        }
         //set latitude, longitude and zoom
         this.latitude = place.geometry.location.lat();
         this.longitude = place.geometry.location.lng();
         console.log( this.latitude);
         console.log( this.longitude);
      });
    });
    }
    );
 }

 goToPrediction(){
  this.predictionService.getPrediction(this.latitude, this.longitude)
  .subscribe(data => {
    console.log('Succesfully Added Product details');
    this.router.navigate(['/prediction']);
  }, Error => {
    console.log('failed while adding product details');
  });
 }

}
