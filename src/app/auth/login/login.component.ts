import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { BannerService } from '../../core/services/banner.service';
import { createBannerType } from '../../core/models/banner.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginFormSub!: Subscription;

  constructor(
    private userService: UserService,
    private banner: BannerService
  ) {}
  ngOnInit(): void {}

  HandleLoginSubmit(loginForm: any) {
    this.loginFormSub = this.userService.login(loginForm).subscribe({
      next: ({ token, user }) => {
        console.log(token, user);
        this.userService.onSuccessfullLogin(token, user);
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

  ngOnDestroy(): void {
    this.loginFormSub?.unsubscribe();
  }
}
