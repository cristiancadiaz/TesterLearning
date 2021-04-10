import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionService {

  
  
  constructor(public db: AngularFirestore) {}
   
   

  async getCollection (route: string): Promise<any>  {
    return await this.db.collection(route).ref.get();
  }
  
  
  async getCollectionById(name: string, id: string): Promise<any> {
    return await this.db.doc(`${name}/${id}`).ref.get();
  }

  updateDocument(nombreCollection: string, key: string, data: any){
    const userRef = this.db.collection(nombreCollection);
    return userRef.doc(key).set(data);
  }

  /* createDocument(nombreCollection: string, key: string){
    return this
  } */
}

