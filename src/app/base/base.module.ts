import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeaderSidebarComponent,
    MainPageComponent,
    BannerComponent,
  ],
  imports: [BaseRoutingModule, SharedModule],
  exports: [HeaderComponent, MainComponent, FooterComponent, BannerComponent],
})
export class BaseModule {}
