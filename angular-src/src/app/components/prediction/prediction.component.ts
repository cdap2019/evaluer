import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { AddLandService } from 'app/services/addLand.service';

 

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  price: any;
  optimzed:any = 6000000;
  address:any;  title = 'My first AGM project';
  lat :any;
  lng :any;
  zoom = 15;
  constructor( private route: ActivatedRoute ,private router:Router,private addLandService:AddLandService) { }

  ngOnInit() {
    this.price = this.route.snapshot.queryParamMap.get('page');
    this.address = this.route.snapshot.queryParamMap.get('page1');
    this.lat = parseFloat(this.route.snapshot.queryParamMap.get('lat'));
    this.lng = parseFloat(this.route.snapshot.queryParamMap.get('lng'));
    console.log(this.lat);
    console.log(this.lng);
    this.price = this.price - this.optimzed ;
    this.getValuersDetails();

  }

  getValuersDetails()
  {
    // console.log(this.address.trim());
    this.addLandService.getValuers(this.address.trim()).subscribe(
      data => { console.log(data); 

      },
      error => { console.log(error);}
    );
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  // tslint:disable-next-line:member-ordering
  valuers:any = [
    {
      id : 1,
      name: 'Valuer 1'
    },
    {
      id : 2,
      name: 'Valuer 2'
    },
    {
      id :3,
      name: 'Valuer 3'
    },
  ]

}
