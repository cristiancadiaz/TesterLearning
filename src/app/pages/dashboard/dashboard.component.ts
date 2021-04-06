import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../app.constants';
import { User } from '../../models/user.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  public users: Array<User>;
  public users1 = [];
  public itemSelected: any


  styleObj: any;
  arrModules = [
    {
      title: 'Fases de Pruebas',
      description: 'Definición de cada una de las fases.',
      bgc: `#3f51b5`,
      progress: 60,
      position:{ top: 300, left: 0 }
    },
    {
      title: 'Modulo 2',
      description: 'La descripcion del modulo 2',
      bgc: `#3f51b5`,
      progress: 20,
      position:{ top: 150, left: 100 }
    },
    {
      title: 'Modulo 3',
      description: 'La descripcion del modulo 3',
      bgc: `#3f51b5`,
      progress: 50,
      position:{ top: 80, left: 300 }
    },
    {
      title: 'Modulo 4',
      description: 'La descripcion del modulo 4',
      bgc: `#3f51b5`,
      progress: 10,
      position:{ top: 80, right: 350 }
    },
    {
      title: 'Modulo 5',
      description: 'La descripcion del modulo 5',
      bgc: `#3f51b5`,
      progress: 100,
      position:{ top: 150, right: 100 }
    },
    {
      title: 'Modulo 6',
      description: 'La descripcion del modulo 6',
      bgc: `#3f51b5`,
      progress: 80,
      position:{ top: 300, right: 0 }
    },
  ]

  constructor(public collection: CollectionService) {
    this.users = new Array<User>();
    this.itemSelected = this.arrModules[0];
   }

  ngOnInit() {
    this.collection.getCollection(SERVICES.USERS).subscribe((result)=>{
      this.users = [];
      result.forEach((chapterData: any) =>{
        this.users.push({key: chapterData.payload.doc.id, ...chapterData.payload.doc.data()})
      })
      console.log(this.users);
    });

    this.collection.getCollectionById(SERVICES.USERS,"l1wnSDlzWvDvBpEWdpdd").subscribe((result) =>{
      console.log('result =>', result);
      })
  }
  moduleSelect(item: any){
    this.itemSelected = item;
  }
}
