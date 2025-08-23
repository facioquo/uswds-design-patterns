import { Component, OnInit, OnDestroy, inject } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { Card } from '../patterns.model';

// @ts-expect-error: modal import has no types, safe to ignore for USWDS modal
import modal from "@uswds/uswds/js/usa-modal";
import { PatternHeaderComponent } from '../../components/pattern-header/pattern-header.component';
import { PatternFooterComponent } from '../../components/pattern-footer/pattern-footer.component';

export const ID = "hero-overlay";

@Component({
  selector: ID,
  templateUrl: './hero-overlay.component.html',
  styleUrls: ['./hero-overlay.component.scss'],
  imports: [PatternHeaderComponent, PatternFooterComponent]
})
export class HeroOverlayComponent implements OnInit, OnDestroy {
  readonly u = inject(UtilityService);


  public pattern: Card = this.u.getPatternCard(ID);

  constructor() {
    this.u.pushMetaTagsForPattern(ID);
  }

  ngOnInit() {
    modal.on("call-to-action-modal");
  }

  ngOnDestroy() {
    modal.off();
  }
}
