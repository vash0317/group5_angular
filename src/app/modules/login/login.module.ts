import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';
import { ForgotComponent } from './components/forgot/forgot.component';


@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
