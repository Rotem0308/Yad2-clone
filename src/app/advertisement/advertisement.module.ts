import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { PickAdComponent } from './pick-ad/pick-ad.component';
import { SharedModule } from '../shared/shared.module';
import { CreateAdComponent } from './real-estate/create-ad/create-ad.component';
import { AssetsTypeComponent } from './real-estate/create-ad-components/assets-type/assets-type.component';
import { AssetAddressComponent } from './real-estate/create-ad-components/asset-address/asset-address.component';

@NgModule({
  declarations: [PickAdComponent, CreateAdComponent, AssetsTypeComponent, AssetAddressComponent],
  imports: [SharedModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
