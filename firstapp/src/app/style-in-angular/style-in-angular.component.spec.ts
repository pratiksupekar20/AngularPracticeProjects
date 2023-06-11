import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleInAngularComponent } from './style-in-angular.component';

describe('StyleInAngularComponent', () => {
  let component: StyleInAngularComponent;
  let fixture: ComponentFixture<StyleInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleInAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
