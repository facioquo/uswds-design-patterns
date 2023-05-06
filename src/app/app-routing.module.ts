import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  // define app module routes here, e.g., to lazily load a module
  // (do not place feature module routes here, use an own -routing.module.ts in the feature instead)

  // {
  //   path: 'about',
  //   loadChildren: () => import('./_core/auth/logout/logout.module').then(m => m.LogoutModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

