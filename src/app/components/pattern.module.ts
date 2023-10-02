import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatternFooterComponent } from './pattern-footer/pattern-footer.component';
import { UtilityService } from '../services/utility.service';

@NgModule({
  declarations: [
    PatternFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PatternFooterComponent,
    RouterModule
  ],
  providers: [
    UtilityService
  ]
})
export class PatternModule { }
