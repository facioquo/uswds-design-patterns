import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SiteCardComponent } from 'src/app/components/site-card/site-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SiteCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
