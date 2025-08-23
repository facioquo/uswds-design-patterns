import { Component, inject } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { type Card } from '../patterns.model';
import { PatternHeaderComponent } from '../../components/pattern-header/pattern-header.component';
import { PatternFooterComponent } from '../../components/pattern-footer/pattern-footer.component';

export const ID = "sticky-menu";

@Component({
    selector: ID,
    templateUrl: './sticky-menu.component.html',
    styleUrls: ['./sticky-menu.component.scss'],
    imports: [PatternHeaderComponent, PatternFooterComponent]
})
export class StickyMenuComponent {
  readonly u = inject(UtilityService);


  public pattern: Card = this.u.getPatternCard(ID);

  constructor() {
    this.u.pushMetaTagsForPattern(ID);
  }
}
