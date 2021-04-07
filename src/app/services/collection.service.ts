import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionService {

  constructor(public db: AngularFirestore) { }

  getCollection(route: string): Observable<any>  {
    return this.db.collection(route).snapshotChanges();
  }
  
  getCollectionById(name: string, id: string): Observable<any> {
    return this.db.doc(`${name}/${id}`).valueChanges();
  }
}

