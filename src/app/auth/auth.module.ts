import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup-step1/signup.component';
import { SignupFormComponent } from './signup-form-step1/signup-form.component';
import { SharedModule } from '../shared/shared.module';
import { SignupFormStep2Component } from './signup-form-step2/signup-form-step2.component';
import { SignupStep2Component } from './signup-step2/signup-step2.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent,
    SignupFormStep2Component,
    SignupStep2Component,
    LoginFormComponent,
    LoginComponent,
  ],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
