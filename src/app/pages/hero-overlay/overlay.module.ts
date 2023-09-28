import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { OverlayRoutingModule } from './overlay-routing.module';
import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    OverlayRoutingModule
  ]
})
export class OverlayModule { }
