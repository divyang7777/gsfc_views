import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DropdownSelectionPage } from './dropdown-selection.page';

const routes: Routes = [
  {
    path: '',
    component: DropdownSelectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DropdownSelectionPage]
})
export class DropdownSelectionPageModule {}
