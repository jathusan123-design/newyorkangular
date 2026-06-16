import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: RestaurantComponent }])
  ]
})
export class RestaurantModule {}
