import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Subscription, tap } from 'rxjs';
import { IUser } from '../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() onUserClick = new EventEmitter<void>();
  isLoggedIn: boolean = false;
  userSub!: Subscription;
  user!: IUser;
  constructor(private userService: UserService) {}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.userService.$user.subscribe({
      next: (user) => {
        this.isLoggedIn = !!user;
        if (user) this.user = user;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  isSideBarOpen: boolean = false;

  openSideBar() {
    this.isSideBarOpen = true;
  }
  closeSideBar() {
    this.isSideBarOpen = false;
  }
}
