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

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuth().subscribe((res)=>{
      this.auth.setUser(res);
      this.currentUser = this.auth.getUser();
      console.log('getUser ', this.currentUser);
      
    })
  }
  
  logout(){
    this.auth.logout().then(()=>{
      this.router.navigate(['/'])
    })
  }

}
