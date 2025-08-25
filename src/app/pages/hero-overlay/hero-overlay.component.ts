import { Component, type OnInit, type OnDestroy, inject } from "@angular/core";

import { UtilityService } from "src/app/services/utility.service";
import { type Card } from "../patterns.model";

import modal from "@uswds/uswds/js/usa-modal";
const modalApi = modal;
import { PatternHeaderComponent } from "../../components/pattern-header/pattern-header.component";
import { PatternFooterComponent } from "../../components/pattern-footer/pattern-footer.component";

export const ID = "hero-overlay";

@Component({
  selector: "app-hero-overlay",
  templateUrl: "./hero-overlay.component.html",
  styleUrls: ["./hero-overlay.component.scss"],
  imports: [PatternHeaderComponent, PatternFooterComponent],
})
export class HeroOverlayComponent implements OnInit, OnDestroy {
  readonly u = inject(UtilityService);

  public pattern: Card = this.u.getPatternCard(ID);

  ngOnInit(): void {
    modalApi.on("call-to-action-modal");
  }

  ngOnDestroy(): void {
    modalApi.off();
  }
}
