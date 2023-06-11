import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDemoComponent } from './tables-demo.component';

describe('TablesDemoComponent', () => {
  let component: TablesDemoComponent;
  let fixture: ComponentFixture<TablesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
