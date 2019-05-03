import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateDetailsPlanningPage } from './simulate-details-planning.page';

describe('SimulateDetailsPlanningPage', () => {
  let component: SimulateDetailsPlanningPage;
  let fixture: ComponentFixture<SimulateDetailsPlanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateDetailsPlanningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateDetailsPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
