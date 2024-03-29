import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickyMenuComponent } from './sticky-menu.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    component: StickyMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyMenuRoutingModule { }
