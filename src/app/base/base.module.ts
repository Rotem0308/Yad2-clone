import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, HeaderSidebarComponent],
  imports: [BaseRoutingModule, SharedModule],
  exports: [HeaderComponent, MainComponent, FooterComponent],
})
export class BaseModule {}
