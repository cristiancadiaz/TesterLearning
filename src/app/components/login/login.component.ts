import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CONFIG_ALERT, ERR_AUTH, TAGS } from '../../app.constants';
import { UtilService } from '../../services/util.service';
import { CollectionService } from 'src/app/services/collection.service';

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
  constructor(private auth: AuthService, private collectionService: CollectionService, private router: Router, private utilService: UtilService) { }

  ngOnInit(): void {
   
  }

  onLogin(){
    this.auth.login(this.loginForm.value).then((res)=>{
      this.router.navigate(['/dashboard'])
    }).catch((err)=>{
      for(const index in ERR_AUTH){
        if(ERR_AUTH[index]['CODE'] == err.code)
          this.utilService.openCustomAlert(TAGS.LABELS.ERROR,'error',CONFIG_ALERT.TIMERS.DEFAULT,'top-end',ERR_AUTH[index]['MESSAGE']);
      }
    })
  }


}
