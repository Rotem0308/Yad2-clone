import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.scss',
})
export class CreateAdComponent {
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
