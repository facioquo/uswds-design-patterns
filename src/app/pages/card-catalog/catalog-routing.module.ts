import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    title: "Card catalog | USWDS design pattern",
    component: CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }