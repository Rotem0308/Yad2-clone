import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
