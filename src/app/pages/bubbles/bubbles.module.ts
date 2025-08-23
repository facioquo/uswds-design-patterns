import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/components/layout.module';
import { BubblesRoutingModule } from './bubbles-routing.module';
import { BubblesComponent } from './bubbles.component';

@NgModule({
    imports: [
        CommonModule,
        BubblesRoutingModule,
        LayoutModule,
        BubblesComponent
    ]
})
export class BubblesModule { }
