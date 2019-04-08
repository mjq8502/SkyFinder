import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDetailPage } from './path-detail.page';

describe('PathDetailPage', () => {
  let component: PathDetailPage;
  let fixture: ComponentFixture<PathDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
