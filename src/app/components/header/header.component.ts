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

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.$currentLocation = location.pathname;
    this.auth.isAuth().subscribe((res)=>{
      this.auth.setUser(res);
      this.currentUser = this.auth.getUser();
    })
  }
  
  logout(){
    this.auth.logout().then(()=>{
      this.router.navigate(['/'])
    })
  }

}
