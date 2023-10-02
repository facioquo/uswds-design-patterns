import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternFooterComponent } from 'src/app/components/pattern-footer/pattern-footer.component';
import { StickyMenuRoutingModule } from './sticky-menu-routing.module';
import { StickyMenuComponent } from './sticky-menu.component';

@NgModule({
  declarations: [
    PatternFooterComponent,
    StickyMenuComponent
  ],
  imports: [
    CommonModule,
    StickyMenuRoutingModule
  ]
})
export class StickyMenuModule { }
