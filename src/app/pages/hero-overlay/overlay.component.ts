import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: this.u.lookupPattern("hero-overlay", "description")
      }
    ]);
  }

  ngOnInit() {
    modal.on("call-to-action-modal");
  }

  ngOnDestroy() {
    modal.off();
  }
}
