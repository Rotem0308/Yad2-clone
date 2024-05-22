import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordRGX } from '../../../utilities/const';

@Component({
  selector: 'app-signup-form-step2',
  templateUrl: './signup-form-step2.component.html',
  styleUrl: './signup-form-step2.component.scss',
})
export class SignupFormStep2Component {
  signupForm!: FormGroup;
  @Output() signupData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      phoneNumber: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      hasReadTerms: this.fb.control(false, [Validators.requiredTrue]),
    });
  }

  invalidFirstNameMessage(): string | null {
    const errors = this.signupForm.get('firstName')?.errors;
    if (errors != null) {
      if (errors['required']) return 'חייב לרשום שם פרטי';
      if (errors['minlength']) return 'שם פרטי חייב להכיל לפחות 2 אותיות';
      if (errors['maxlength']) return 'שם פרטי חייב להכיל לכל היותר 20 אותיות';
    }
    return null;
  }
  invalidLastNameMessage(): string | null {
    const errors = this.signupForm.get('lastName')?.errors;
    if (errors != null) {
      if (errors['required']) return 'חייב לרשום שם משפחה';
      if (errors['minlength']) return 'שם משפחה חייב להכיל לפחות 2 אותיות';
      if (errors['maxlength']) return 'שם משפחה חייב להכיל לכל היותר 20 אותיות';
    }
    return null;
  }
  invalidPhoneMessage(): string | null {
    const errors = this.signupForm.get('phoneNumber')?.errors;
    if (errors != null) {
      if (errors['required']) return 'חייב לרשום טלפון ';
      if (errors['minlength']) return 'טלפון חייב להכיל לפחות 10 אותיות';
      if (errors['maxlength']) return ' טלפון חייב להכיל לכל היותר 10 אותיות';
    }
    return null;
  }

  handleSubmitSignupForm() {
    console.log('signup working');
    this.signupData.emit(this.signupForm.value);
  }
}
