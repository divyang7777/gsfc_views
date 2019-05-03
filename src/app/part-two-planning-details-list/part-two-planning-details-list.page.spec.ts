import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoPlanningDetailsListPage } from './part-two-planning-details-list.page';

describe('PartTwoPlanningDetailsListPage', () => {
  let component: PartTwoPlanningDetailsListPage;
  let fixture: ComponentFixture<PartTwoPlanningDetailsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTwoPlanningDetailsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTwoPlanningDetailsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
