import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { PickAdComponent } from './pick-ad/pick-ad.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PickAdComponent],
  imports: [SharedModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
