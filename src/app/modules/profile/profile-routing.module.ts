import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {MedicineKitComponent} from './components/medicine-kit/medicine-kit.component';
import {DoctorsComponent} from './components/doctors/doctors.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'medicine-kit',
        pathMatch: 'full'
      },
      {
        path: 'medicine-kit',
        component: MedicineKitComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
