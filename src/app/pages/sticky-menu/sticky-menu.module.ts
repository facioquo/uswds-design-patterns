import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/components/layout.module';
import { StickyMenuRoutingModule } from './sticky-menu-routing.module';
import { StickyMenuComponent } from './sticky-menu.component';

@NgModule({
  declarations: [
    StickyMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    StickyMenuRoutingModule
  ]
})
export class StickyMenuModule { }
