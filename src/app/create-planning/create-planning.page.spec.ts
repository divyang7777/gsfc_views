import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanningPage } from './create-planning.page';

describe('CreatePlanningPage', () => {
  let component: CreatePlanningPage;
  let fixture: ComponentFixture<CreatePlanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlanningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
