import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MedicineKitComponent } from './components/medicine-kit/medicine-kit.component';
import { DoctorsComponent } from './components/doctors/doctors.component';


@NgModule({
  declarations: [ProfileComponent, SidebarComponent, MedicineKitComponent, DoctorsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
