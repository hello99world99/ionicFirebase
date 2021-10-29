import { getAuth } from '@firebase/auth';
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public firstName: any;
  public lastName: any;

  constructor(
    private afrdb: AngularFireDatabase,
    ) {
    const user = getAuth().currentUser;
    const userId = user.uid;
    this.afrdb.list('User/'+userId).valueChanges().subscribe(
      (result) => {
        this.firstName = result[2];
        this.lastName = result[3];
      }
    );
  }

}
