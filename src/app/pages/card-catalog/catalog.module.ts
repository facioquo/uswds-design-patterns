import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
