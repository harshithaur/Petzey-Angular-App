import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AppointmentDetailsComponent } from './all-appointment/appointment-details/appointment-details.component';
import { AppointmentListComponent } from './all-appointment/appointment-list/appointment-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddAppointmentDataComponent } from './add-appointment/add-appointment-data/add-appointment-data.component';
import { DoctorAddComponent } from './add-appointment/add-appointment-data/doctor-add/doctor-add.component';
import { UserAddComponent } from './add-appointment/add-appointment-data/user-add/user-add.component';
import { AppointmentDataDetailsComponent } from './view-details/appointment-data-details/appointment-data-details.component';
import { AppointmentViewDataComponent } from './view-details/appointment-data-details/appointment-view-data/appointment-view-data.component';
import { AppointmentReportDataComponent } from './view-details/appointment-data-details/appointment-report-data/appointment-report-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from '../Custom-pipe/filter.pipe';
import { AppointmentService } from '../Service/Service-Appointment';



@NgModule({
  declarations: [
    DashboardComponent,
    AllAppointmentComponent,
    AddAppointmentComponent,
    ViewDetailsComponent,
    AppointmentDetailsComponent,
    AppointmentListComponent,
    AddAppointmentDataComponent,
    DoctorAddComponent,
    UserAddComponent,
    AppointmentDataDetailsComponent,
    AppointmentViewDataComponent,
    AppointmentReportDataComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatSelectModule,
    MatMenuModule,
    MatSliderModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatAutocompleteModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [DatePipe],
})
export class DashboardModule { }
