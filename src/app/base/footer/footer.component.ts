import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isMenu1Open: boolean = false;
  isMenu2Open: boolean = false;
  isMenu3Open: boolean = false;
  isMenu4Open: boolean = false;
  isMenu5Open: boolean = false;
}
