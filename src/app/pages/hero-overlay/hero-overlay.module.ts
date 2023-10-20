import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/components/layout.module';
import { HeroOverlayRoutingModule } from './hero-overlay-routing.module';
import { HeroOverlayComponent } from './hero-overlay.component';

@NgModule({
  declarations: [
    HeroOverlayComponent
  ],
  imports: [
    CommonModule,
    HeroOverlayRoutingModule,
    LayoutModule
  ]
})
export class HeroOverlayModule { }
