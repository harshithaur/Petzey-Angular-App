import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDataDetailsComponent } from './appointment-data-details.component';

describe('AppointmentDataDetailsComponent', () => {
  let component: AppointmentDataDetailsComponent;
  let fixture: ComponentFixture<AppointmentDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
