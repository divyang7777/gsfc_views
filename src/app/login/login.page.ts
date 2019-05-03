import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private alert: AlertController,
    private nativeStorage: NativeStorage,
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.nativeStorage.getItem('myitem')
    //   .then((data) => {
    //     data === 'true' ? this.router.navigate(['home']) : null;
    //   },
    //     error => console.error(error)
    //   );
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async forgotPassword() {
    console.log('Delete');
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'Processing Forgot Password.',
      buttons: ['OK']
    });

    await alert.present();
  }

  submit() {
    // this.nativeStorage.setItem('islogin', 'true')
    //   .then(
    //     () => console.log('Stored item!'),
    //     error => console.error('Error storing item', error)
    //   );
    this.navCtrl.navigateRoot('/home');
    // this.router.navigate(['home']);
  }

}
