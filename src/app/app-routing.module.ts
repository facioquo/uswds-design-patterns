import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SITE_TITLE, patternTitleWithSuffix } from "./services/utility.service";

// define app module routes here, e.g., to lazily load a page module
// do not place feature module routes here
// ref: https://angular.io/guide/lazy-loading-ngmodules
const routes: Routes = [
  {
    path: '',
    title: SITE_TITLE,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },

  // design patterns
  {
    path: 'card-catalog',
    title: patternTitleWithSuffix('card-catalog'),
    loadChildren: () => import('./pages/card-catalog/card-catalog.module').then(m => m.CardCatalogModule)
  },
  {
    path: 'hero-overlay',
    title: patternTitleWithSuffix('hero-overlay'),
    loadChildren: () => import('./pages/hero-overlay/hero-overlay.module').then(m => m.HeroOverlayModule)
  },
  {
    path: 'bubbles',
    title: patternTitleWithSuffix('bubbles'),
    loadChildren: () => import('./pages/bubbles/bubbles.module').then(m => m.BubblesModule)
  },
  {
    path: 'sticky-menu',
    title: patternTitleWithSuffix('sticky-menu'),
    loadChildren: () => import('./pages/sticky-menu/sticky-menu.module').then(m => m.StickyMenuModule)
  },

  // 404 page
  {
    path: '**',
    loadChildren: () => import('./pages/404/404.module').then(m => m.PageNotFoundModule)
  }
];

const routerOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
