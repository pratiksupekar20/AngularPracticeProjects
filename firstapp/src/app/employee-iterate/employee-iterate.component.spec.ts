import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIterateComponent } from './employee-iterate.component';

describe('EmployeeIterateComponent', () => {
  let component: EmployeeIterateComponent;
  let fixture: ComponentFixture<EmployeeIterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeIterateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeIterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
