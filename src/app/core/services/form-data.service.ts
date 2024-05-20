import { Injectable, isSignal } from '@angular/core';
import { ISignup } from '../../shared/models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}

  signUpForm!: ISignup;

  setSignupFormStep(data: any) {
    this.signUpForm = { ...this.signUpForm, ...data };
    console.log(this.signUpForm);
  }

  getSignupForm() {
    return this.signUpForm;
  }

  resetSignupForm() {
    this.signUpForm;
  }
  hasUnSavedData() {
    return this.signUpForm != null;
  }
}
