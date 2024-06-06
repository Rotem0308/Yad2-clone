import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { PickAdComponent } from './pick-ad/pick-ad.component';
import { SharedModule } from '../shared/shared.module';
import { CreateAdComponent } from './real-estate/create-ad/create-ad.component';
import { AssetsTypeComponent } from './real-estate/create-ad-components/assets-type/assets-type.component';
import { AssetAddressComponent } from './real-estate/create-ad-components/asset-address/asset-address.component';
import { AssetFeaturesComponent } from './real-estate/create-ad-components/asset-features/asset-features.component';
import { AssetPaymentsComponent } from './real-estate/create-ad-components/asset-payments/asset-payments.component';
import { AssetPhotosComponent } from './real-estate/create-ad-components/asset-photos/asset-photos.component';
import { AssetContactInfoComponent } from './real-estate/create-ad-components/asset-contact-info/asset-contact-info.component';

@NgModule({
  declarations: [
    PickAdComponent,
    CreateAdComponent,
    AssetsTypeComponent,
    AssetAddressComponent,
    AssetFeaturesComponent,
    AssetPaymentsComponent,
    AssetPhotosComponent,
    AssetContactInfoComponent,
  ],
  imports: [SharedModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
