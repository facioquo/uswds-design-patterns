import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { StickyMenuRoutingModule } from './sticky-menu-routing.module';
import { StickyMenuComponent } from './sticky-menu.component';

@NgModule({
  declarations: [
    StickyMenuComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    StickyMenuRoutingModule
  ]
})
export class StickyMenuModule { }
