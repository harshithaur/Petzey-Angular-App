import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentDataComponent } from './add-appointment-data.component';

describe('AddAppointmentDataComponent', () => {
  let component: AddAppointmentDataComponent;
  let fixture: ComponentFixture<AddAppointmentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
