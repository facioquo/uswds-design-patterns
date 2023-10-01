import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    title: "Design pattern idea book for U.S. Web Design System",
    component: HomeComponent
  },

  // this can happen if user back button after logout
  {
    path: "null",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
