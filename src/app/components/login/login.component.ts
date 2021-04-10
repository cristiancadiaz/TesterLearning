import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { SERVICES } from 'src/app/app.constants';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private auth: AuthService, private router: Router, private collectionService: CollectionService) { }

  ngOnInit(): void {}

  onLogin(){
    this.auth.login(this.loginForm.value).then((res)=>{
      this.router.navigate(['/dashboard'])
      
      console.log("result 33333 =>", res);  
    })
  }


}
