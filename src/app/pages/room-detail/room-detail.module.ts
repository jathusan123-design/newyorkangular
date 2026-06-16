import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RoomDetailComponent } from './room-detail.component';

@NgModule({
  declarations: [RoomDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: RoomDetailComponent }])
  ]
})
export class RoomDetailModule {}
