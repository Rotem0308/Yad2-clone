import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';
import { IUser } from '../../core/models/user.model';

@Component({
  selector: 'app-pick-ad',
  templateUrl: './pick-ad.component.html',
  styleUrl: './pick-ad.component.scss',
})
export class PickAdComponent implements OnInit {
  userSub!: Subscription;
  user!: IUser;
  constructor(private userService: UserService) {}
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
  }
}
