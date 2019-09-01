import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
 

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  price: any;
  constructor(private route: ActivatedRoute ,private router:Router) { }

  ngOnInit() {
    this.price = this.route.snapshot.queryParamMap.get('page');
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
