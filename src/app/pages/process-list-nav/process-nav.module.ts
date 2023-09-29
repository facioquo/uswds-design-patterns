import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProcessNavRoutingModule } from './process-nav-routing.module';
import { ProcessNavComponent } from './process-nav.component';

@NgModule({
  declarations: [
    ProcessNavComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProcessNavRoutingModule
  ]
})
export class ProcessNavModule { }
