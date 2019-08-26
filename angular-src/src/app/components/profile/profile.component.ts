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
  lands:any=[];
  temp:any;
  userInfo = localStorage.getItem('user');
  userId = JSON.parse(this.userInfo);
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

      this.temp = res,
      this.temp.forEach(land => {
         if(this.userId.id == land.user)
         {
          this.lands.push(land);
         }
         else if( this.userId.id == '5d635ff9d73ff1632402ce23' )
         {
            this.lands = res;
         }
       })
      // if(this.userId.id === res.user)
      // {
      //   this.lands = res;
      //   console.log(res);
      // }
      // else{
      //   console.log('No records')
      // }
    });
  }
}
