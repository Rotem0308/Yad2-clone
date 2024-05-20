import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LikeComponent } from './icons/like/like.component';
import { UserComponent } from './icons/user/user.component';
import { MessageComponent } from './icons/message/message.component';

import { ClockComponent } from './icons/clock/clock.component';
import { BellComponent } from './icons/bell/bell.component';
import { LogoutComponent } from './icons/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    LikeComponent,
    UserComponent,
    MessageComponent,
    ClockComponent,
    BellComponent,
    LogoutComponent,
    ErrorMessageComponent,
    PhoneFormatPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LikeComponent,
    CommonModule,
    UserComponent,
    MessageComponent,
    ClockComponent,
    BellComponent,
    LogoutComponent,
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
    PhoneFormatPipe,
  ],
})
export class SharedModule {}
