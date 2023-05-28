import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

