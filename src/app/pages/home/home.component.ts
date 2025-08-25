import { Component, inject } from "@angular/core";

import { UtilityService } from "@services/utility.service";

import { type Card, PATTERNS } from "../patterns.model";
import { SiteCardComponent } from "@components/site-card/site-card.component";

// Route data sets the page title and description.

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [SiteCardComponent],
})
export class HomeComponent {
  readonly u = inject(UtilityService);

  // landing page card data
  public cards: Card[] = PATTERNS;

  // ghost card for suggestions
  public suggestionCard: Card = {
    id: "ghost-card",
    title: "» make a suggestion",
    description: "What are we missing?  Send us new design pattern ideas.",
    link: "https://github.com/facioquo/uswds-design-patterns/issues/new?labels=enhancement&template=feature_request.md",
    image: "add",
    imageType: "usa-icon",
  };
}
