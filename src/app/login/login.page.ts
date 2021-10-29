import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private mService: MyServiceService,
    private auth: AngularFireAuth,
    private route: Router
  ) { }

  ngOnInit() {
  }

  submitForm(data: any){
    this.auth.signInWithEmailAndPassword(data.value.email, data.value.password).then(
      (result) => {
        if (result){
          this.route.navigateByUrl('/tabs');
        }
      }
    );
  }
}
