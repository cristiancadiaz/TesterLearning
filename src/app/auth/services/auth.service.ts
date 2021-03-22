import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string): Promise<any>{
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    return result;
  }
  async register(email: string, password: string){
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }
  async logout(){
    await this.afAuth.signOut();
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

