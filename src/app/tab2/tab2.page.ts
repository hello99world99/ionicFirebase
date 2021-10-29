import { MyServiceService } from './../services/my-service.service';
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public userList: any;

  constructor(private afrdb: AngularFireDatabase) {
    this.afrdb.list('User/').valueChanges().subscribe(
      (result) => {
        this.userList = result;
      }
    );
  }

}
