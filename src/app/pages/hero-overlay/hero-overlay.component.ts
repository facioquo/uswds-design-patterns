import {
  Component,
  type OnInit,
  type OnDestroy,
  ChangeDetectionStrategy,
  ElementRef,
  inject
} from "@angular/core";

import { UtilityService } from "@services/utility.service";
import { type Card } from "../patterns.model";

import modal from "@uswds/uswds/js/usa-modal";
import { PatternHeaderComponent } from "@components/pattern-header/pattern-header.component";
import { PatternFooterComponent } from "@components/pattern-footer/pattern-footer.component";

export const ID = "hero-overlay";

@Component({
  selector: "app-hero-overlay",
  templateUrl: "./hero-overlay.component.html",
  styleUrl: "./hero-overlay.component.scss",
  imports: [PatternHeaderComponent, PatternFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroOverlayComponent implements OnInit, OnDestroy {
  readonly u = inject(UtilityService);
  readonly #element = inject<ElementRef<HTMLElement>>(ElementRef);

  public pattern: Card = this.u.getPatternCard(ID);

  ngOnInit(): void {
    modal.on(this.#element.nativeElement);
  }

  ngOnDestroy(): void {
    // USWDS moves initialized modals to document.body, outside this component.
    modal.off();
  }
}
