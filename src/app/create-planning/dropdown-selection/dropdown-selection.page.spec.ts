import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectionPage } from './dropdown-selection.page';

describe('DropdownSelectionPage', () => {
  let component: DropdownSelectionPage;
  let fixture: ComponentFixture<DropdownSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownSelectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
