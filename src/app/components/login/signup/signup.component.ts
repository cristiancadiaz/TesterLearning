import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilService } from '../../../services/util.service';
import { AuthService } from '../../../services/auth.service';
import { CONFIG_ALERT, ERR_AUTH, SERVICES, TAGS } from '../../../app.constants';
import { Router } from '@angular/router';
import { CollectionService } from '../../../services/collection.service';
import { Chapter } from '../../../models/chapter.model';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    displayName: new FormControl(''),
    photo: new FormControl('https://firebasestorage.googleapis.com/v0/b/testerlearning-21e1c.appspot.com/o/Users%2Fdefault%2Fsoccer_balloom.jpg?alt=media&token=0e2a044a-3f03-41ae-8926-bedcfb6e873d'),
    email: new FormControl(''),
    password: new FormControl('')
  })


  private chapters : Array<Chapter>;

  constructor(public auth: AuthService, private utilService: UtilService, private collectionService: CollectionService ,private router: Router) {
    this.chapters = new Array<Chapter>();
   }

  ngOnInit(): void {
    this.collectionService.getCollection(SERVICES.CHAPTERS).then((resChapters)=>{
      resChapters.forEach((doc: any) =>{
        this.chapters.push({key: doc.id})
      })
    })
  }

  onRegister(){
    this.utilService.openSpinner();
    this.auth.register(this.registerForm.value).then(()=>{
      this.auth.login(this.registerForm.value).then((res)=>{
        this.chapters.forEach((item)=>{
          this.collectionService.updateDocument(`${SERVICES.USERS}/${res.user.uid}/${SERVICES.CHAPTERS}/${item.key}`, {progress: 0})
        })
        this.utilService.closeSpinner();
        this.utilService.openCustomAlert(TAGS.LABELS.COMPLETE_REGISTER,'success',CONFIG_ALERT.TIMERS.DEFAULT,'top-end');
        this.router.navigate(['/dashboard'])
      })
    }).catch((err)=>{
      this.utilService.closeSpinner();
      for(const index in ERR_AUTH){
        if(ERR_AUTH[index]['CODE'] == err.code)
          this.utilService.openCustomAlert(TAGS.LABELS.ERROR,'error',CONFIG_ALERT.TIMERS.DEFAULT,'top-end',ERR_AUTH[index]['MESSAGE']);
      }
    })
  }
  
}
