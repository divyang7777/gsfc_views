import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-planning-details',
  templateUrl: './planning-details.page.html',
  styleUrls: ['./planning-details.page.scss'],
})
export class PlanningDetailsPage implements OnInit {

  constructor(
    private alert: AlertController,
    private router: Router,
    private emailComposer: EmailComposer
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
      message: 'Do you really want to Delete?',
      buttons: ['OK']
    });

    await alert.present();
  }
  async  excelDownload() {
    console.log('Excel Download');
    const alert = await this.alert.create({
      header: 'Excel Download',
      message: 'Do you want to Download Excel?',
      buttons: ['OK']
    });

    await alert.present();
  }
  async pdfDownload() {
    console.log('Pdf Download');
    const alert = await this.alert.create({
      header: 'PDF Download',
      message: 'Do you want to Download PDF?',
      buttons: ['OK']
    });

    await alert.present();
  }
  simulate() {
    console.log('simulate');
  }
  email() {
    console.log('Email');
    this.emailComposer.open({ app: 'gmail' });
  }
}
