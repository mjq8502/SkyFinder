import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppSettingsPage } from './appSettings.page';

describe('AppSettingsPage', () => {
  let component: AppSettingsPage;
  let fixture: ComponentFixture<AppSettingsPage>;
  let appSettingsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(AppSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    appSettingsPage = fixture.nativeElement;
    const items = appSettingsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
