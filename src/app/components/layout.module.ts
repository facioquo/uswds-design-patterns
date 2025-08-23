import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatternHeaderComponent } from './pattern-header/pattern-header.component';
import { PatternFooterComponent } from './pattern-footer/pattern-footer.component';
import { PatternSettingsComponent } from './pattern-settings/pattern-settings.component';
import { UtilityService } from '../services/utility.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PatternHeaderComponent,
        PatternFooterComponent,
        PatternSettingsComponent
    ],
    exports: [
        PatternHeaderComponent,
        PatternFooterComponent,
        PatternSettingsComponent,
        RouterModule
    ],
    providers: [
        UtilityService
    ]
})
export class LayoutModule { }
