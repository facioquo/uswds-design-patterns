import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatternHeaderComponent } from './pattern-header/pattern-header.component';
import { PatternFooterComponent } from './pattern-footer/pattern-footer.component';
import { UtilityService } from '../services/utility.service';

@NgModule({
  declarations: [
    PatternHeaderComponent,
    PatternFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PatternHeaderComponent,
    PatternFooterComponent,
    RouterModule
  ],
  providers: [
    UtilityService
  ]
})
export class PatternModule { }
