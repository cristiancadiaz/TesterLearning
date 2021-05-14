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
  public exams: Array<any>;
  public itemSelected: any = null;
  transformX : number = 565.714;
  positionParalax : string;
  oldValue = 0;
  areThereActivities = false;

  constructor(public authService: AuthService, public collectionService: CollectionService) { 
    this.chapters = new Array<any>();
    this.exams = new Array<any>();
  }

  ngOnInit(): void {
    this.positionParalax = `translate3d(-50%, ${this.transformX}px, 0px)`
    this.scrollParalax();
    this.getActivities();
    this.getExams();
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
  getActivities(){
    this.collectionService.getCollection(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}`).then((result)=>{
      result.forEach((item) => {
        if(!this.areThereActivities)
          this.areThereActivities = item.data().activity && true;
        if(item.data().activity){
          this.chapters.push({idActivity:  item.data().activity.idActivity, total:  item.data().activity.total, module:  item.data().activity.module })
        }
      });
    })
  }
  getExams(){
    this.collectionService.getCollection(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.EXAMS}`).then((result)=>{
      result.forEach((item) => {
        this.exams.push({key: item.id, total: item.data().total})
      });
    })
  }
  setValueChapter(item: any){
    this.itemSelected = item;
  }
}
