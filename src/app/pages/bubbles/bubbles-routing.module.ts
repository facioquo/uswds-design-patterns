import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BubblesComponent } from './bubbles.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    title: "Floating bubbles | Design pattern for USWDS",
    component: BubblesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubblesRoutingModule { }
