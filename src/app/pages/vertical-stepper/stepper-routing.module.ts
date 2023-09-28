import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepperComponent } from './stepper.component';

const routes: Routes = [
  {
    path: "", // "" for lazy-loading, see AppRoutingModule
    title: "Vertical step indicator | Extended design pattern for USWDS",
    component: StepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
