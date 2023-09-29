import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessNavComponent } from './process-nav.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    title: "Sticky process menu | Extended design pattern for USWDS",
    component: ProcessNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessNavRoutingModule { }
