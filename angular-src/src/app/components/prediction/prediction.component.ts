import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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


}
