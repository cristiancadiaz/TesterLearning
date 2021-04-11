import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionService {

  
  
  constructor(public db: AngularFirestore) {}

  async getCollection (route: string): Promise<any>  {
    return await this.db.collection(route).ref.get();
  }
  
  async getCollectionById(route: string): Promise<any>  {
    return await this.db.doc(route).ref.get();
  }

  async updateDocument(route: string, data: any) :Promise<any>  {
    return await this.db.doc(route).set(data);
  }

  /* updateDocument(route: string, data: any){
    return this.db.doc(route).set(data);
  } */
}

