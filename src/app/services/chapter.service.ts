import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ChapterService {

  constructor(public db: AngularFirestore) { }

  getChapters()  {
    return this.db.collection('Users').snapshotChanges();
  }
  
  async getChapterbyID()  {
    return await this.db.collection('Users').doc('93gzG9qFKd2CeOpCqULg').get();
  }
}

