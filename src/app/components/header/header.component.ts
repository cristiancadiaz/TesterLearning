import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {Location} from '@angular/common';


@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: firebase.default.User;

  $currentLocation: any;

  constructor(public auth:AuthService, private router: Router, private _location: Location) {
    this.currentUser = this.auth.currentUser;
   }

  ngOnInit(): void {
    this.$currentLocation = location.pathname;
    console.log('currentLocaiton', this.$currentLocation.indexOf('activity') > -1);
  }

  goBack(){
    this._location.back();
  }
  
  logout(){
    this.auth.logout().then(()=>{
      this.router.navigate(['/'])
    })
  }

}
