import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first} from 'rxjs/operators'
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import { userI } from 'src/assets/interfaceUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;


  constructor(public afAuth: AngularFireAuth) { }

  loginByEmail(user: userI) {
    const { email, password } = user;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }


  loginWithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }


  async register(email: string, password: string, asuario: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password,

    );
    return result;
  }


  async logout() {
    await this.afAuth.signOut();
  }


  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise()
  }


  async resetPassword(email:string){
   const result = await this.afAuth.sendPasswordResetEmail(
     email
    );
   return result;
  }


hasUser(){
  return this.afAuth.authState;
}
}




  // constructor(public afAuth: AngularFireAuth) { }
  //  doRegister(email: string, password:string){
  //   return new Promise<any>((resolve, reject) => {
  //    firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })


  // }



// }
