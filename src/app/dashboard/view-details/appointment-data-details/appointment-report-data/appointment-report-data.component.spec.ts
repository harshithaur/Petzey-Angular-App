import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentReportDataComponent } from './appointment-report-data.component';

describe('AppointmentReportDataComponent', () => {
  let component: AppointmentReportDataComponent;
  let fixture: ComponentFixture<AppointmentReportDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentReportDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentReportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
