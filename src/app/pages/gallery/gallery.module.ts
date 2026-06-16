import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GalleryComponent }])
  ]
})
export class GalleryModule {}
