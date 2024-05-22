import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickAdComponent } from './pick-ad/pick-ad.component';

const routes: Routes = [{ path: '', component: PickAdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
