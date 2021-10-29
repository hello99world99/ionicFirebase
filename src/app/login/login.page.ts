import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private mService: MyServiceService,
    private auth: AngularFireAuth,
    private route: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
  }

  submitForm(data: any){
    if (data.value.password !== data.value.c_password){
      this.toast.create();
    }else{
      this.auth.signInWithEmailAndPassword(data.value.email, data.value.password).then(
        (result) => {
          if (result){
            this.route.navigateByUrl('/tabs');
          }
        }
      );
    }
  }

}
