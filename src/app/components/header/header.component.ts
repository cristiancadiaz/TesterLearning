import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: firebase.default.User;

  $currentLocation: any;

  constructor(public auth:AuthService, private router: Router) {
    this.currentUser = this.auth.currentUser;
   }

  ngOnInit(): void {}
  
  logout(){
    this.auth.logout().then(()=>{
      this.router.navigate(['/'])
    })
  }

}
