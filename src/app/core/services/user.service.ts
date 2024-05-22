import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ISignup } from '../../shared/models/signup.model';
import { BehaviorSubject, Observable, Subscription, first, map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { BannerService } from './banner.service';
import { createBannerType } from '../models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserSub!: Subscription;
  private _token = new BehaviorSubject<string | null>(null);
  $token = this._token.asObservable();

  private _user = new BehaviorSubject<IUser | null>(null);
  $user = this._user.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private banner: BannerService
  ) {}

  signup(signupData: ISignup): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/Yad2Clone/Account/Signup`,
      signupData
    );
  }
  login(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/Yad2Clone/Account/Login`,
      loginData
    );
  }
  logout() {
    if (this._token.getValue() == null) return;
    this._token.next(null);
    this._user.next(null);
    sessionStorage.clear();
    this.banner.open({
      message: 'Logged Out Successfully',
      type: createBannerType('success'),
    });
    this.router.navigate(['']);
  }
  getUser(): Observable<any> {
    return this.http.get(`${environment.API_URL}/Yad2Clone/Account`);
  }

  onSuccessfullLogin(token: string, user: IUser) {
    this._token.next(token);
    this._user.next(user);
    sessionStorage.setItem('TOKEN', token);
    this.banner.open({
      message: 'Logged In Successfully',
      type: createBannerType('success'),
    });
    this.router.navigate(['']);
  }

  onSuccessfullSignup() {
    this.banner.open({
      message: 'Sign In Successfully',
      type: createBannerType('success'),
    });
    this.router.navigate(['/auth/login']);
  }

  checkSessionStorage() {
    const token: string | null = sessionStorage.getItem('TOKEN');
    // I placed the next method of the token here so before i try to make a get req
    // to the server i will update the token state so the auth interceptor can successfuly send
    // the token along with the request
    this._token.next(token);
    if (token != null) {
      console.log(token);
      this.getUser()
        .pipe(first())
        .subscribe({
          next: (user) => {
            console.log(user);
            this._user.next(user.user);
          },
          error: (err) => {
            console.log(err);
            this.banner.open({
              message: err?.error || err?.statusText,
              type: createBannerType('error'),
            });
          },
        });
    }
  }

  getJwtToken() {
    return this._token.getValue();
  }
}
