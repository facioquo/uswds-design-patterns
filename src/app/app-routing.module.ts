import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SITE_TITLE, patternTitle, titleWithSuffix } from "./services/utility.service";

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
    title: patternTitle('card-catalog'),
    loadChildren: () => import('./pages/card-catalog/card-catalog.module').then(m => m.CardCatalogModule)
  },
  {
    path: 'hero-overlay',
    title: patternTitle('hero-overlay'),
    loadChildren: () => import('./pages/hero-overlay/hero-overlay.module').then(m => m.HeroOverlayModule)
  },
  {
    path: 'bubbles',
    title: patternTitle('bubbles'),
    loadChildren: () => import('./pages/bubbles/bubbles.module').then(m => m.BubblesModule)
  },
  {
    path: 'sticky-menu',
    title: patternTitle('sticky-menu'),
    loadChildren: () => import('./pages/sticky-menu/sticky-menu.module').then(m => m.StickyMenuModule)
  },

  // 404 page
  {
    path: '**',
    title: titleWithSuffix("Page not found"),
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
