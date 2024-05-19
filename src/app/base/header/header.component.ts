import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() onUserClick = new EventEmitter<void>

  isOpen: boolean = false;
  isOnRegistration: boolean = false;
  openSideBar() {
    this.isOpen = true;
  }
  closeSideBar() {
    this.isOpen = false;
  }
}
