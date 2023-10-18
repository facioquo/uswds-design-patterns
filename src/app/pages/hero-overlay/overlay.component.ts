import { Component, OnInit, OnDestroy } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";

@Component({
  selector: 'app-hero-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, OnDestroy {

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.updateMetaTags("hero-overlay");
  }

  ngOnInit() {
    modal.on("call-to-action-modal");
  }

  ngOnDestroy() {
    modal.off();
  }
}
