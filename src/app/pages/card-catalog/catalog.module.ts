import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
