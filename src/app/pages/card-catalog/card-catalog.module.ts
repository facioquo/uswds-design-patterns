import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/components/layout.module';
import { CardCatalogRoutingModule } from './card-catalog-routing.module';
import { CardCatalogComponent } from './card-catalog.component';

@NgModule({
    imports: [
        CommonModule,
        NgOptimizedImage,
        CardCatalogRoutingModule,
        FormsModule,
        LayoutModule,
        CardCatalogComponent
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class CardCatalogModule { }
