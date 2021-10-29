import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Ng2SearchPipe } from 'ng2-search-filter';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public userList: any;
  public value: any;

  constructor(private afrdb: AngularFireDatabase) {
    this.afrdb.list('User/').valueChanges().subscribe(
      (result) => {
        this.userList = result;
      }
    );
  }

}
