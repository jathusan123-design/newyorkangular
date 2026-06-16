import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LocationDetailComponent } from './location-detail.component';

@NgModule({
  declarations: [LocationDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LocationDetailComponent }])
  ]
})
export class LocationDetailModule {}
