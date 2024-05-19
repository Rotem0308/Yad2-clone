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
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required]),
      terms: this.fb.control(false, [Validators.requiredTrue]),
    });
  }

  handleSubmitSignupForm() {
    console.log('signup working');
    this.signupData.emit(this.signupForm.value);
  }
}
