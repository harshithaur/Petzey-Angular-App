import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: 'allAppointment', component: AllAppointmentComponent },
  { path: 'addAppointment', component: AddAppointmentComponent },
  { path: 'viewDetails', component: ViewDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
