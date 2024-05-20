import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from '../../core/services/form-data.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { BannerService } from '../../core/services/banner.service';
import { createBannerType } from '../../core/models/banner.model';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrl: './signup-step2.component.scss',
})
export class SignupStep2Component implements OnInit, OnDestroy {
  signupSub!: Subscription;
  constructor(
    private formService: FormDataService,
    private router: Router,
    private userService: UserService,
    private banner: BannerService
  ) {}
  ngOnDestroy(): void {
    this.signupSub?.unsubscribe();
  }

  ngOnInit(): void {
    if (!this.formService.hasUnSavedData()) {
      this.router.navigate(['/auth/signup-step1']);
    }
  }

  handleSignupForm(form: any) {
    this.formService.setSignupFormStep(form);
    this.signupSub = this.userService
      .signup(this.formService.getSignupForm())
      .subscribe({
        next: (user) => {
          console.log(user);
          this.userService.onSuccessfullSignup();
        },
        error: (err) => {
          console.log(err);
          this.banner.open({
            message: err?.error?.message,
            type: createBannerType('error'),
          });
        },
      });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification(event: any): void {
    if (this.formService.hasUnSavedData()) {
      event.preventDefault();
      event.returnValue =
        'You have unsaved changes. Do you really want to leave?'; // This will trigger the browser's confirmation dialog
    }
  }
}
