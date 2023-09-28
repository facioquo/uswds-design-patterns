import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverlayComponent } from './overlay.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    title: "Hero callout overlay | Extended design pattern for USWDS",
    component: OverlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayRoutingModule { }
