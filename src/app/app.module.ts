import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AllVetDetailsComponent } from './all-vet-details/all-vet-details.component';
import { AllPetDetailsComponent } from './all-pet-details/all-pet-details.component';
import { ProfileDataComponent } from './profile-details/profile-data/profile-data.component';
import { UserProfileComponent } from './profile-details/profile-data/user-profile/user-profile.component';
import { DoctorProfileComponent } from './profile-details/profile-data/doctor-profile/doctor-profile.component';
import { PetDataComponent } from './all-pet-details/pet-data/pet-data.component';
import { VetDataComponent } from './all-vet-details/vet-data/vet-data.component';
import { SharedModule } from './shared/shared.module';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetDataDetailsComponent } from './vet-details/vet-data-details/vet-data-details.component';
import { EditVetProfileComponent } from './edit-vet-profile/edit-vet-profile.component';
import { EditVetComponent } from './edit-vet-profile/edit-vet/edit-vet.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { EditUserComponent } from './edit-user-profile/edit-user/edit-user.component';
import { EditPetProfileComponent } from './edit-pet-profile/edit-pet-profile.component';
import { EditPetComponent } from './edit-pet-profile/edit-pet/edit-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetDataDetailsComponent } from './pet-details/pet-data-details/pet-data-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { FilterPipe2 } from './Custom-pipe/fiter2.pipe';
import { msalAngularConfig, msalConfig } from './app.config';
import { Configuration } from 'msal';
import { MsalAngularConfiguration, MsalInterceptor, MsalModule, MsalService, MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddPetDataComponent } from './add-pet/add-pet-data/add-pet-data.component';

function MSALConfigFactory(): Configuration {
  return msalConfig;

}
function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return msalAngularConfig;

}

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    AllVetDetailsComponent,
    AllPetDetailsComponent,
    ProfileDataComponent,
    UserProfileComponent,
    DoctorProfileComponent,
    PetDataComponent,
    VetDataComponent,
    VetDetailsComponent,
    VetDataDetailsComponent,
    EditVetProfileComponent,
    EditVetComponent,
    EditUserProfileComponent,
    EditUserComponent,
    EditPetProfileComponent,
    EditPetComponent,
    PetDetailsComponent,
    PetDataDetailsComponent,
    FilterPipe2,
    AddPetComponent,
    AddPetDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatCardModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MsalModule,
    DashboardModule,
  
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
