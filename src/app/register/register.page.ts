import { MyServiceService } from './../services/my-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private mService: MyServiceService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  public async submitForm(data: any){
    if (data.value.password !== data.value.c_password){
      const toast = await this.toastController.create({
        message: 'Your passwords are not the same',
        duration: 2000
      });
      toast.present();
    }else{
      this.mService.signUpUser(data);
    }
  }

}
