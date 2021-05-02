import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../app.constants';
import { Chapter } from '../../models/chapter.model';
import { AuthService } from '../../services/auth.service';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  private userProgress: any;
  public itemSelected: any

  public modules: Array<Chapter>;
  styleObj: any;
 

  constructor(public collectionService: CollectionService, private authService:AuthService) {
    this.modules = new Array<Chapter>();
  }
  
  ngOnInit() {
    this.handlerModulesRender();
    
  }
  moduleSelect(item: any){
    this.itemSelected = item;
  }

  async handlerModulesRender(){
    if(this.collectionService.modules.length == 0){
      await this.collectionService.getCollection(SERVICES.CHAPTERS).then((resChapters)=>{
        resChapters.forEach(async (doc) =>{
            await this.handlerUserProgressRender(doc.id).then((result)=>{
              this.collectionService.modules.push({key: doc.id, progress: result.progress, ...doc.data()})
            });
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
