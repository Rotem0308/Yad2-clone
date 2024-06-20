import { Injectable, isSignal } from '@angular/core';
import { ISignup } from '../../shared/models/signup.model';
import { IWizard } from '../../shared/models/wizard.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { BannerService } from './banner.service';
import { createBannerType } from '../models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor(private http: HttpClient, private banner: BannerService) {}

  signUpForm!: ISignup;
  wizardForm!: IWizard;
  step = new BehaviorSubject<number>(1);
  step$ = this.step.asObservable();

  //wizard Form
  setWizardForm(data: any): void {
    this.wizardForm = { ...this.wizardForm, ...data };
    this.step.next(this.step.value + 1);
  }
  setStep(step: number) {
    this.step.next(step);
  }

  createAdvertisment() {
    const formData = new FormData();
    const formArray = Object.entries(this.wizardForm);
    formArray.forEach((key) => {
      if (key[0] === 'photos' && key[1]) {
        key[1].forEach((file: any, index: any) => {
          formData.append('Photos', file, file.name);
        });
      } else {
        formData.append(key[0], JSON.stringify(key[1]));
      }
    });

    return this.http
      .post(`${environment.API_URL}/Yad2Clone/RealEstateForRent`, formData)
      .subscribe({
        next: (res) => {
          this.banner.open({
            message: 'ad Created Successfully',
            type: createBannerType('success'),
          });
        },
        error: (err) => {
          console.log('you have a bug');
          console.log(err);
        },
      });
  }

  //signup Form
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
