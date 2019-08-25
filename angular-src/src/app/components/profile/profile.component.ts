import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AddLandService } from 'app/services/addLand.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  lands:any;
  constructor(private authService:AuthService, private router:Router,private addLandService: AddLandService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });

     this.getLands();
  }

  getLands() {
    this.addLandService.getLands().subscribe(res => {
      this.lands = res;
    });
  }
}
