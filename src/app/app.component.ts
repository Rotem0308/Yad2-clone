import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.checkSessionStorage();
  }

  onRegistration: boolean = false;
}
