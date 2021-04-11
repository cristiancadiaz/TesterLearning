import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  public userData$: Observable<firebase.default.User>
  public currentUser: any;
  
  constructor(public afAuth: AngularFireAuth) {
    this.userData$ = afAuth.authState;
    this.isAuth().subscribe((res)=>{
        this.setUser(res);
      })
    }

  login(user: User): Promise<any>{
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(userData => resolve(userData),
      err=> reject(err));
    })

  }
  async register(user: User){
    const promiseCreateUser = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    const promiseUpdateUser = (await this.afAuth.currentUser).updateProfile({displayName: user.displayName, photoURL: user.photo})
    return Promise.all([promiseCreateUser,promiseUpdateUser]);
  }
  async logout(){
    await this.afAuth.signOut();
  }
  
  isAuth(){
    return this.afAuth.authState.pipe(map(auth=>auth))
  }

  setUser(user: any){
    this.currentUser = user;
  }
}

