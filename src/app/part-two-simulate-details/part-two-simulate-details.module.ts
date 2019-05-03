import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartTwoSimulateDetailsPage } from './part-two-simulate-details.page';

const routes: Routes = [
  {
    path: '',
    component: PartTwoSimulateDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartTwoSimulateDetailsPage]
})
export class PartTwoSimulateDetailsPageModule {}
