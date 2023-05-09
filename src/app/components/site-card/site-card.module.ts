import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteCardComponent } from './site-card.component';

@NgModule({
  declarations: [
    SiteCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteCardComponent
  ]
})
export class SiteCardModule { }
