import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LikeComponent } from './icons/like/like.component';
import { UserComponent } from './icons/user/user.component';
import { MessageComponent } from './icons/message/message.component';

import { ClockComponent } from './icons/clock/clock.component';
import { BellComponent } from './icons/bell/bell.component';
import { LogoutComponent } from './icons/logout/logout.component';

@NgModule({
  declarations: [
    LikeComponent,
    UserComponent,
    MessageComponent,
    ClockComponent,
    BellComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    LikeComponent,
    CommonModule,
    UserComponent,
    MessageComponent,
    ClockComponent,
    BellComponent,
    LogoutComponent,
  ],
})
export class SharedModule {}
