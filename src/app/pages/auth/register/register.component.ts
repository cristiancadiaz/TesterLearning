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
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(public auth: AuthService) { 
    
  }

  ngOnInit(): void {}

  onRegister(){
    this.auth.register(this.registerForm.get("email").value,this.registerForm.get("password").value).then(
      (user: any)=>{
        console.log(user);
      }
    );

    console.log('Form->', this.registerForm.value);
  }
  
  

}
