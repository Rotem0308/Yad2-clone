import { Component } from '@angular/core';
import { FormDataService } from '../../core/services/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private formService: FormDataService, private router: Router) {}

  handleSignupForm(form: any) {
    this.formService.setSignupFormStep(form);
    this.router.navigate(['auth/signup-step2']);
  }
}
