import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilService } from '../../../services/util.service';
import { AuthService } from '../../../services/auth.service';
import { CONFIG_ALERT, ERR_AUTH, TAGS } from '../../../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    displayName: new FormControl(''),
    photo: new FormControl(''),
    email: new FormControl('test'),
    password: new FormControl('')
  })
  constructor(public auth: AuthService, private utilService: UtilService, private router: Router) { }

  ngOnInit(): void {}

  onRegister(){
    this.auth.register(this.registerForm.value).then(()=>{
      this.utilService.openCustomAlert(TAGS.LABELS.COMPLETE_REGISTER,'success',CONFIG_ALERT.TIMERS.DEFAULT,'top-end');
      this.auth.login(this.registerForm.value).then(()=>{
        this.router.navigate(['/dashboard'])
      })
    }).catch((err)=>{
      for(const index in ERR_AUTH){
        if(ERR_AUTH[index]['CODE'] == err.code)
          this.utilService.openCustomAlert(TAGS.LABELS.ERROR,'error',CONFIG_ALERT.TIMERS.DEFAULT,'top-end',ERR_AUTH[index]['MESSAGE']);
      }
    })
  }
  
}
