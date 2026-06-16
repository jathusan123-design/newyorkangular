import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: BlogDetailComponent }])
  ]
})
export class BlogDetailModule {}
