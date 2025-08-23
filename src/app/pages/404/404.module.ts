import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './404-routing.module';
import { PageNotFoundComponent } from './404.component';

@NgModule({
    imports: [
        CommonModule,
        PageNotFoundRoutingModule,
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule { }
