import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onLogin(){
    this.auth.login(this.loginForm.value).then((res)=>{
      this.router.navigate(['/dashboard'])
    })
  }


}
