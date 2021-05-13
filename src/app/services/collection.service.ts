import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Chapter } from '../models/chapter.model';

@Injectable()
export class CollectionService {

  public modules: Array<Chapter> = new Array<Chapter>();
  public moduleSelected: Chapter;
  
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
  async addDocument(route: string, data: any) :Promise<any>  {
    return await this.db.collection(route).add(data)
  }
  /* updateDocument(route: string, data: any){
    return this.db.doc(route).set(data);
  } */
}

