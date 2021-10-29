import { MyServiceService } from './../services/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private mService: MyServiceService
  ) { }

  ngOnInit() {
  }

  public submitForm(data: any){
    if (data.value.password !== data.value.c_password){
      console.log('The two password are not equal...');
    }else{
      this.mService.signUpUser(data);
    }
  }

}
