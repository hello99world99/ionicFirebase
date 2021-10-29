import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getAuth } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private userList: any;

  constructor(
    private fireStore: AngularFireStorage,
    private auth: AngularFireAuth,
    private afrdb: AngularFireDatabase
  ) { }

  signUpUser(data: any){
    this.auth.createUserWithEmailAndPassword(
      data.value.email, data.value.password
    ).then((result) => {
      const user = getAuth().currentUser;
      const userId = user.uid;
      this.afrdb.object('User/'+userId).set(data.value);
    });
  }
}
