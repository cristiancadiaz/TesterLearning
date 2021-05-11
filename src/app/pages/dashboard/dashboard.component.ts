import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  public itemSelected: any

  styleObj: any;
 

  constructor(public collectionService: CollectionService) {
  }
  
  ngOnInit() {
    
  }
  moduleSelect(item: any){
    this.itemSelected = item;
  }


}
