import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-part-two-simulate-details',
  templateUrl: './part-two-simulate-details.page.html',
  styleUrls: ['./part-two-simulate-details.page.scss'],
})
export class PartTwoSimulateDetailsPage implements OnInit {

  selected = [true, false, false, false, false];

  constructor(
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(val) {
    this.selected.forEach((res, i) => {
      if (i === val) {
        this.selected[i] = true;
      } else {
        this.selected[i] = false;
      }
    });
    // this.selected[val] = true;
    // this.navCtrl.pop();
  }

}
