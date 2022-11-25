import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderDetailsComponent } from './header-details/header-details.component';
import { SidebarDetailsComponent } from './sidebar-details/sidebar-details.component';


@NgModule({
  declarations: [
    HeaderDetailsComponent,
    SidebarDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderDetailsComponent,
    SidebarDetailsComponent
  ]
})
export class SharedModule { }
