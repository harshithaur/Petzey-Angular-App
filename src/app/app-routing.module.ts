import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AllPetDetailsComponent } from './all-pet-details/all-pet-details.component';
import { AllVetDetailsComponent } from './all-vet-details/all-vet-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPetProfileComponent } from './edit-pet-profile/edit-pet-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { EditVetProfileComponent } from './edit-vet-profile/edit-vet-profile.component';
import { EditVetComponent } from './edit-vet-profile/edit-vet/edit-vet.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'allvet', component: AllVetDetailsComponent, canActivate: [MsalGuard] },
  { path: 'allpet', component: AllPetDetailsComponent, canActivate: [MsalGuard] },
  { path: 'profile', component: ProfileDetailsComponent, canActivate: [MsalGuard] },
  { path: 'vetdetails', component: VetDetailsComponent, canActivate: [MsalGuard] },
  { path: 'petdetails', component: PetDetailsComponent, canActivate: [MsalGuard] },
  { path: 'editvet', component: EditVetProfileComponent, canActivate: [MsalGuard] },
  { path: 'editpet', component: EditPetProfileComponent, canActivate: [MsalGuard] },
  { path: 'edituser', component: EditUserProfileComponent, canActivate: [MsalGuard] },
  { path: 'addPet', component: AddPetComponent, canActivate: [MsalGuard] },
  { path: 'landing', component: LandingPageComponent },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', component: LandingPageComponent }
];
const config: ExtraOptions = {
  useHash: false
}
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
