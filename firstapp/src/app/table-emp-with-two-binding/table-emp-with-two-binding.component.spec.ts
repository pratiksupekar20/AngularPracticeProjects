import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpWithTwoBindingComponent } from './table-emp-with-two-binding.component';

describe('TableEmpWithTwoBindingComponent', () => {
  let component: TableEmpWithTwoBindingComponent;
  let fixture: ComponentFixture<TableEmpWithTwoBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEmpWithTwoBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEmpWithTwoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
