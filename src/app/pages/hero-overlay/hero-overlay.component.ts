import { Component, OnInit, OnDestroy } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { Card } from '../patterns.model';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";

export const ID = "hero-overlay";

@Component({
    selector: ID,
    templateUrl: './hero-overlay.component.html',
    styleUrls: ['./hero-overlay.component.scss'],
    standalone: false
})
export class HeroOverlayComponent implements OnInit, OnDestroy {

  public pattern: Card = this.u.getPatternCard(ID);

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.pushMetaTagsForPattern(ID);
  }

  ngOnInit() {
    modal.on("call-to-action-modal");
  }

  ngOnDestroy() {
    modal.off();
  }
}
