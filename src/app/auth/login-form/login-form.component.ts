import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  canViewPass: boolean = false;
  canViewConfirmPass: boolean = false;

  loginForm!: FormGroup;
  @Output() loginData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  invalidPasswordMessage(): string | null {
    const errors = this.loginForm.get('password')?.errors;
    if (errors != null) {
      if (errors['required']) return 'Must Have Password';
      if (errors['minlength'])
        return 'Password Must Have At Least 8 Characters';
    }
    return null;
  }

  invalidEmailMessage(): string | null {
    const errors = this.loginForm.get('email')?.errors;
    if (errors != null) {
      if (errors['required']) return 'Must Have Email';
      if (errors['email'])
        return 'Email must be formmated : example@example.com';
    }
    return null;
  }

  handleSubmitSignupForm() {
    console.log('signup working');
    this.loginData.emit(this.loginForm.value);
  }
}
