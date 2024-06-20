import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { FormDataService } from '../../../core/services/form-data.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.scss',
})
export class CreateAdComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('wizardContainer') wizardComponents!: ElementRef;
  userSub!: Subscription;
  user!: IUser;
  step$!: Observable<number>;
  stepSub!: Subscription;
  currentStep: number | null = 1;
  constructor(
    private userService: UserService,
    private formService: FormDataService
  ) {}

  ngOnDestroy(): void {
    this.stepSub.unsubscribe();
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub = this.userService.$user.subscribe({
      next: (user) => {
        console.log(user);
        if (user) this.user = user;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.stepSub = this.formService.step$.subscribe({
      next: (res) => {
        this.currentStep = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.step$ = this.formService.step$;
  }

  //To make sure i scroll right to the top of the active component
  // i need the unfolding of it to happen and only then to scroll to the
  //up most spot of it. and that is why with ngAfterViewChecked i make
  //sure that changes in the view are handled before the scroll action.
  ngAfterViewChecked(): void {
    const group: HTMLDivElement = this.wizardComponents
      .nativeElement as HTMLDivElement;
    if (this.currentStep != null && this.currentStep <= 7)
      group.children[this.currentStep - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    this.currentStep = null;
  }
}
