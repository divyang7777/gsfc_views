import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SimulateDetailsPlanningPage } from './simulate-details-planning.page';

const routes: Routes = [
  {
    path: '',
    component: SimulateDetailsPlanningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SimulateDetailsPlanningPage]
})
export class SimulateDetailsPlanningPageModule {}
