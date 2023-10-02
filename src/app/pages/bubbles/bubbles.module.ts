import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BubblesRoutingModule } from './bubbles-routing.module';
import { PatternModule } from 'src/app/components/pattern.module';

import { BubblesComponent } from './bubbles.component';

@NgModule({
  declarations: [
    BubblesComponent
  ],
  imports: [
    CommonModule,
    BubblesRoutingModule,
    PatternModule
  ]
})
export class BubblesModule { }
