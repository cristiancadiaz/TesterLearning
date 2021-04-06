import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    displayName: new FormControl('Christian Diaz'),
    photo: new FormControl('gyhi'),
    email: new FormControl('cristian@gmail.com'),
    password: new FormControl('123456')
  })
  constructor(public auth: AuthService) { 
    
  }

  ngOnInit(): void {
    console.log('user', this.auth.getUser());
    
    
  }

  onRegister(){
    this.auth.register(this.registerForm.value).then((res)=>{
    
      
    })
    /* this.auth.register(this.registerForm.value).then(
      (user: any)=>{
        console.log(user);
      }
    ); */

  }
  
}
