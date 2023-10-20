import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/components/layout.module';
import { CardCatalogRoutingModule } from './card-catalog-routing.module';
import { CardCatalogComponent } from './card-catalog.component';

@NgModule({
  declarations: [
    CardCatalogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    CardCatalogRoutingModule,
    FormsModule,
    LayoutModule
  ]
})
export class CardCatalogModule { }
