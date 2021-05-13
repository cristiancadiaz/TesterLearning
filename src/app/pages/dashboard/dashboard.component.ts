import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  public itemSelected: any

  styleObj: any;
 

  constructor(public collectionService: CollectionService, private utilService: UtilService) {
  }
  
  ngOnInit() {
    this.utilService.closeSpinner();
  }
  moduleSelect(item: any){
    this.collectionService.moduleSelected = item;
  }


}
