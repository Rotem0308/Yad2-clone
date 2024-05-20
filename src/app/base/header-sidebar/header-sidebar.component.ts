import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrl: './header-sidebar.component.scss',
})
export class HeaderSidebarComponent implements OnInit {
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

  @Input() isSidebarOpen: boolean = false;
  @Output() clickEvent = new EventEmitter<void>();
  isMenu1Open: boolean = false;
  isMenu2Open: boolean = false;
  isMenu3Open: boolean = false;
  isMenu4Open: boolean = false;
  isMenu5Open: boolean = false;
  isMenu6Open: boolean = false;
  isMenu7Open: boolean = false;

  menutoToClose: number = 0;
  closeMenuById(id: number) {
    this.menutoToClose = id;
  }
  onClick() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.clickEvent.emit();
  }
  handleLogout() {
    this.userService.logout();
  }
}
