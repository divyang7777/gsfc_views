import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dropdown-selection',
  templateUrl: './dropdown-selection.page.html',
  styleUrls: ['./dropdown-selection.page.scss'],
})
export class DropdownSelectionPage implements OnInit {

  header: string;
  selectDistrict: string;
  selectBlock: string;
  selectProduct: string;
  quantity: string;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private alert: AlertController,
  ) {
    const isEdit = this.route.snapshot.queryParams.edit;
    isEdit === 'true' ? this.header = 'Edit' : this.header = 'Add';
    isEdit === 'true' ? this.selectDistrict = 'Ahmedabad' : this.selectDistrict = '';
    isEdit === 'true' ? this.selectBlock = 'Block 01' : this.selectBlock = '';
    isEdit === 'true' ? this.selectProduct = 'Product 01' : this.selectProduct = '';
    isEdit === 'true' ? this.quantity = '2000' : this.quantity = '';
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  async delete() {
    console.log('Delete');
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'Do you really want to Delete?',
      buttons: ['OK']
    });

    await alert.present();
  }

}
