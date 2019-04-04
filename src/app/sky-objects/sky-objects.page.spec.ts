import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyObjectsPage } from './sky-objects.page';

describe('SkyObjectsPage', () => {
  let component: SkyObjectsPage;
  let fixture: ComponentFixture<SkyObjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyObjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyObjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
