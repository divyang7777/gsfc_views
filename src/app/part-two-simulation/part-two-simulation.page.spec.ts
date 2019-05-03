import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoSimulationPage } from './part-two-simulation.page';

describe('PartTwoSimulationPage', () => {
  let component: PartTwoSimulationPage;
  let fixture: ComponentFixture<PartTwoSimulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTwoSimulationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTwoSimulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
