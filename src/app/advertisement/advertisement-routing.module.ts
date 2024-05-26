import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickAdComponent } from './pick-ad/pick-ad.component';
import { CreateAdComponent } from './real-estate/create-ad/create-ad.component';

const routes: Routes = [
  { path: '', component: PickAdComponent },
  { path: 'create', component: CreateAdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
