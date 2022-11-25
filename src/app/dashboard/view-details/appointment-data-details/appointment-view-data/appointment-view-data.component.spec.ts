import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentViewDataComponent } from './appointment-view-data.component';

describe('AppointmentViewDataComponent', () => {
  let component: AppointmentViewDataComponent;
  let fixture: ComponentFixture<AppointmentViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentViewDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
