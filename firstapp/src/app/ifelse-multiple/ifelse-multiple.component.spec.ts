import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseMultipleComponent } from './ifelse-multiple.component';

describe('IfelseMultipleComponent', () => {
  let component: IfelseMultipleComponent;
  let fixture: ComponentFixture<IfelseMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelseMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
