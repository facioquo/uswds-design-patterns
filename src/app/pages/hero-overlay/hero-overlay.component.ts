import { Component, type OnInit, type OnDestroy, inject } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { type Card } from '../patterns.model';

// USWDS modal has no types; declare a minimal interface for linting
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type UswdsModal = {
  on: (id: string) => void;
  off: () => void;
};
// @ts-expect-error - upstream package is untyped; runtime provides the expected shape
import modal from "@uswds/uswds/js/usa-modal";
const modalApi = modal as unknown as UswdsModal;
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
    modalApi.on("call-to-action-modal");
  }

  ngOnDestroy() {
    modalApi.off();
  }
}
