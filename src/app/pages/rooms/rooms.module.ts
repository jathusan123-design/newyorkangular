import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RoomsComponent } from './rooms.component';

@NgModule({
  declarations: [RoomsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: RoomsComponent }])
  ]
})
export class RoomsModule {}
