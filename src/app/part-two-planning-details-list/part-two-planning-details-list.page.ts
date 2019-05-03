import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-part-two-planning-details-list',
  templateUrl: './part-two-planning-details-list.page.html',
  styleUrls: ['./part-two-planning-details-list.page.scss'],
})
export class PartTwoPlanningDetailsListPage implements OnInit {

  constructor(
    private router: Router,
    private alert: AlertController

  ) { }

  ngOnInit() {
  }

  edit() {
    console.log('Create Planning');
    this.router.navigate(['create-planning'], { queryParams: { edit: true } });
  }
  openEditPlanning() {
    this.router.navigate(['dropdown-selection'], { queryParams: { edit: true } });
  }
  async delete() {
    console.log('Delete');
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'Do you really want to Delete? ',
      buttons: ['OK'],
    });

    await alert.present();
  }
  excelDownload() {
    console.log('Excel Download');
  }
  pdfDownload() {
    console.log('Pdf Download');
  }
  simulate() {
    console.log('simulate');
  }
  email() {
    console.log('Email');
  }

}
