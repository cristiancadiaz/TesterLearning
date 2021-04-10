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

 
  private $currentUser: firebase.default.User;;
  public itemSelected: any

  public modules: Array<Chapter>;
  styleObj: any;
 

  constructor(public collectionService: CollectionService, private authService:AuthService) {
    this.modules = new Array<Chapter>();
    
    this.collectionService.getCollection(SERVICES.CHAPTERS).then((resChapters)=>{
      resChapters.forEach((doc) =>{
        this.modules.push({key: doc.id, progress: 60, ...doc.data()})
      })
      this.itemSelected = this.modules[0];
    })

    
  }
  
  ngOnInit() {
    this.authService.isAuth().subscribe((res)=>{
      this.authService.setUser(res);
      this.$currentUser = this.authService.getUser();
    })
    
  }
  moduleSelect(item: any){
    this.itemSelected = item;
  }
}
