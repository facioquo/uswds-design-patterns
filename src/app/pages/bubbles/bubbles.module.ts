import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BubblesRoutingModule } from './bubbles-routing.module';
import { BubblesComponent } from './bubbles.component';

@NgModule({
  declarations: [
    BubblesComponent
  ],
  imports: [
    CommonModule,
    BubblesRoutingModule
  ]
})
export class BubblesModule { }
