import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'planning', loadChildren: './planning/planning.module#PlanningPageModule' },
  { path: 'planning-details', loadChildren: './planning-details/planning-details.module#PlanningDetailsPageModule' },
  { path: 'create-planning', loadChildren: './create-planning/create-planning.module#CreatePlanningPageModule' },
  { path: 'simulate', loadChildren: './simulate/simulate.module#SimulatePageModule' },
  {
    path: 'dropdown-selection',
    loadChildren: './create-planning/dropdown-selection/dropdown-selection.module#DropdownSelectionPageModule'
  },
  {
    path: 'simulate-details-planning',
    loadChildren: './simulate/simulate-details-planning/simulate-details-planning.module#SimulateDetailsPlanningPageModule'
  },
  {
    path: 'part-two-planning-details',
    loadChildren: './part-two-planning-details/part-two-planning-details.module#PartTwoPlanningDetailsPageModule'
  },
  {
    path: 'part-two-planning-details-list',
    loadChildren: './part-two-planning-details-list/part-two-planning-details-list.module#PartTwoPlanningDetailsListPageModule'
  },
  { path: 'part-two-simulation', loadChildren: './part-two-simulation/part-two-simulation.module#PartTwoSimulationPageModule' },
  {
    path: 'part-two-simulate-details',
    loadChildren: './part-two-simulate-details/part-two-simulate-details.module#PartTwoSimulateDetailsPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
