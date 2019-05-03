import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private nativeStorage: NativeStorage,
    private navCtrl: NavController,
    ) {}

  openPartOne() {
    console.log('Part 01 !');

  }

  openPartTwo() {
    console.log('Part 02 !');
  }

  logOut() {
    this.navCtrl.navigateRoot('/login');
  }

}
