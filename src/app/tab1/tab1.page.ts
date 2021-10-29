import { getAuth } from '@firebase/auth';
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private afrdb: AngularFireDatabase,
    ) {
    const user = getAuth().currentUser;
    const userId = user.uid;
    this.afrdb.list('User/'+userId).valueChanges().subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

}
