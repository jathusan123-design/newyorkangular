import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationGuard } from './core/guards/location.guard';

const routes: Routes = [
  /* ── Location picker (home) ── no guard */
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  /* ── Content pages ── require a location to be selected ── */
  {
    path: 'about',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'rooms',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule)
  },
  {
    path: 'rooms/:id',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/room-detail/room-detail.module').then(m => m.RoomDetailModule)
  },
  {
    path: 'restaurant',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path: 'gallery',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'blog',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'blog/:id',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/blog-detail/blog-detail.module').then(m => m.BlogDetailModule)
  },
  {
    path: 'contact',
    canActivate: [LocationGuard],
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'location/:id',
    loadChildren: () => import('./pages/location-detail/location-detail.module').then(m => m.LocationDetailModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 80]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
