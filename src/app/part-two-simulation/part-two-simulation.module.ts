import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartTwoSimulationPage } from './part-two-simulation.page';

const routes: Routes = [
  {
    path: '',
    component: PartTwoSimulationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartTwoSimulationPage]
})
export class PartTwoSimulationPageModule {}
