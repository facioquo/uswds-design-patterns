import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/components/layout.module';
import { StickyMenuRoutingModule } from './sticky-menu-routing.module';
import { StickyMenuComponent } from './sticky-menu.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        StickyMenuRoutingModule,
        StickyMenuComponent
    ]
})
export class StickyMenuModule { }
