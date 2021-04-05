import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    displayName: new FormControl('Christian Diaz'),
    phone: new FormControl('3158745745'),
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
