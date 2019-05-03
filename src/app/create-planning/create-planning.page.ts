import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-planning',
  templateUrl: './create-planning.page.html',
  styleUrls: ['./create-planning.page.scss'],
})
export class CreatePlanningPage implements OnInit {

  header: string;
  planningText: string;
  planningDate: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public navCtrl: NavController,
  ) {
    const isEdit = this.route.snapshot.queryParams.edit;
    isEdit === 'true' ? this.header = 'Edit' : this.header = 'Create';
    isEdit === 'true' ? this.planningText = 'Planning 01' : this.planningText = '';
    isEdit === 'true' ? this.planningDate = 'May 03, 2019' : this.planningDate = '';
  }

  ngOnInit() {
  }

  openEditPlanning() {
    this.router.navigate(['dropdown-selection'], { queryParams: { edit: true } });
  }

}
