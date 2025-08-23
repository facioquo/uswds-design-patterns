import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';

import { HeroOverlayComponent } from './hero-overlay.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    component: HeroOverlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroOverlayRoutingModule { }
