import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { AuthService } from '../../services/auth.service';
import { SERVICES } from 'src/app/app.constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public chapters: Array<any>;
  public chapterSelected: any = null;
  transformX : number = 565.714;
  positionParalax : string;
  oldValue = 0;

  constructor(public authService: AuthService, public collectionService: CollectionService) { 
    this.chapters = new Array<any>();
  }

  ngOnInit(): void {
    this.positionParalax = `translate3d(-50%, ${this.transformX}px, 0px)`
    this.scrollParalax();
    this.getModulesResult();
  }

  scrollParalax(){
    window.addEventListener('scroll', (evt: any)=>{
      var newValue = window.pageYOffset;

      if(this.oldValue - newValue < 0){
        this.transformX += 1.8;
      } else if(this.oldValue - newValue > 0){
        this.transformX -= 1.8;
      }
      this.positionParalax = `translate3d(-50%, ${this.transformX}px, 0px)`
      this.oldValue = newValue;
    }, true);
  }
  getModulesResult(){
    this.collectionService.getCollection(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}`).then((result)=>{
      result.forEach((item) => {
        this.chapters.push({...item.data()})
      });
    })
  }
  setValueChapter(chapter: any){
    this.chapterSelected = chapter;
  }

}
