import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    StepperRoutingModule
  ]
})
export class StepperModule { }
