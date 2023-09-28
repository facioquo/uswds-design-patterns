import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OverlayRoutingModule } from './overlay-routing.module';
import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    OverlayRoutingModule,
    FormsModule
  ]
})
export class OverlayModule { }
