import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupStep2Component } from './signup-step2/signup-step2.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup-step1', component: SignupStep2Component },
  { path: 'signup-step2', component: SignupStep2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
