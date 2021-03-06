import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {Location} from '@angular/common';
import { CollectionService } from '../../services/collection.service';
import { SERVICES } from '../../app.constants';
import { UtilService } from '../../services/util.service';


@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: firebase.default.User;

  $currentLocation: any;

  constructor(public authService:AuthService,private utilService: UtilService ,private collectionService: CollectionService, private router: Router, private _location: Location) {
    this.currentUser = this.authService.currentUser;
   }

  ngOnInit(): void {
    this.utilService.openSpinner();
    this.$currentLocation = location.pathname;
    this.collectionService.modules = [];
    this.handlerModulesRender();
  }

  goBack(){
    this._location.back();
  }
  
  logout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/'])
    })
  }

  async handlerModulesRender(){
    if(this.collectionService.modules.length == 0){
      await this.collectionService.getCollection(SERVICES.CHAPTERS).then((resChapters)=>{
        resChapters.forEach(async (doc) =>{
            await this.handlerUserProgressRender(doc.id).then((result)=>{
              this.collectionService.modules.push({key: doc.id, progress: result.progress, ...doc.data()})
            });
            this.utilService.closeSpinner();
            this.collectionService.moduleSelected = this.collectionService.modules[0]
          })
      })
    }
 
  }
  async handlerUserProgressRender(idChapter:string){
    return await this.collectionService.getCollectionById(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}/${idChapter}`,).then((result)=>{
      if(result.exists)
        return result.data();
    })
  }

}
