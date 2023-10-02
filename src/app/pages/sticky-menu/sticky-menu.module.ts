import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternModule } from 'src/app/components/pattern.module';
import { StickyMenuRoutingModule } from './sticky-menu-routing.module';

import { StickyMenuComponent } from './sticky-menu.component';

@NgModule({
  declarations: [
    StickyMenuComponent
  ],
  imports: [
    CommonModule,
    PatternModule,
    StickyMenuRoutingModule
  ]
})
export class StickyMenuModule { }
