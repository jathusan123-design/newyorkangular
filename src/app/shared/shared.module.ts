import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { CatCountPipe } from './pipes/cat-count.pipe';

@NgModule({
  declarations: [PageBannerComponent, CatCountPipe],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [
    PageBannerComponent,
    CatCountPipe,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {}
