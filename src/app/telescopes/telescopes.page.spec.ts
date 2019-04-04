import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopesPage } from './telescopes.page';

describe('TelescopesPage', () => {
  let component: TelescopesPage;
  let fixture: ComponentFixture<TelescopesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelescopesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelescopesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
