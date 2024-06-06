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
import { WizardSummaryComponent } from './wizard-summary/wizard-summary.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { FormatNumberPipe } from './pipes/format-number.pipe';

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
    WizardSummaryComponent,
    ButtonToggleComponent,
    FormatNumberPipe,
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
    WizardSummaryComponent,
    ButtonToggleComponent,
    PhoneFormatPipe,
  ],
})
export class SharedModule {}
