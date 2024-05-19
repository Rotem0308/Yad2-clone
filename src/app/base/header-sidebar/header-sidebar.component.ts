import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrl: './header-sidebar.component.scss',
})
export class HeaderSidebarComponent {
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
}
