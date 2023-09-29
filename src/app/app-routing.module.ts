import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// define app module routes here, e.g., to lazily load a page module
// do not place feature module routes here
// ref: https://angular.io/guide/lazy-loading-ngmodules
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'card-catalog',
    loadChildren: () => import('./pages/card-catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'hero-overlay',
    loadChildren: () => import('./pages/hero-overlay/overlay.module').then(m => m.OverlayModule)
  },
  {
    path: 'sticky-menu',
    loadChildren: () => import('./pages/sticky-menu/sticky-menu.module').then(m => m.StickyMenuModule)
  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

