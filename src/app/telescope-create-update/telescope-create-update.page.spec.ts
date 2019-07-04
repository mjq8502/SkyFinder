import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopeCreateUpdatePage } from './telescope-create-update.page';

describe('TelescopeCreateUpdatePage', () => {
  let component: TelescopeCreateUpdatePage;
  let fixture: ComponentFixture<TelescopeCreateUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelescopeCreateUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelescopeCreateUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
