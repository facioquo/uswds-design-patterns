import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './404.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
