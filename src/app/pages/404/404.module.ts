import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './404-routing.module';
import { PageNotFoundComponent } from './404.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
