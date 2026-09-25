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

  #modal: HTMLElement | null = null;

  ngOnInit(): void {
    this.#modal = this.#element.nativeElement.querySelector(".usa-modal");
    modal.on(this.#element.nativeElement);
  }

  ngOnDestroy(): void {
    if (!this.#modal) return;

    // Close an open modal first so USWDS restores the page's body state and aria-hidden.
    if (this.#modal.closest(".usa-modal-wrapper.is-visible")) {
      this.#modal.querySelector<HTMLElement>(".usa-modal__close")?.click();
    }

    // USWDS moves initialized modals to document.body, so tear down by the modal element itself.
    modal.off(this.#modal);
  }
}
