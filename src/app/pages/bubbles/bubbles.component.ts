import { Component, type OnInit, inject } from "@angular/core";

import { UtilityService } from "src/app/services/utility.service";
import { type Card } from "src/app/components/site-card/card.model";
import { type Image, IMAGES } from "../image.model";
import { PatternHeaderComponent } from "../../components/pattern-header/pattern-header.component";
import { PatternFooterComponent } from "../../components/pattern-footer/pattern-footer.component";

export const ID = "bubbles";

@Component({
    selector: ID,
    templateUrl: "./bubbles.component.html",
    styleUrls: ["./bubbles.component.scss"],
    imports: [PatternHeaderComponent, PatternFooterComponent]
})
export class BubblesComponent implements OnInit {
  readonly u = inject(UtilityService);


  public pattern: Card = this.u.getPatternCard(ID);

  constructor() {
    this.u.pushMetaTagsForPattern(ID);
  }

  public cards: Card[] = [];
  private images: Image[] = IMAGES;

  ngOnInit(): void {

    // make random cards
    const max = 7;
    for (let i = 0; i < max; i++) {

      const rand = this.u.randInt(800);
      const image = this.images[rand];

      const card: Card = {
        id: `bubble-${image.id.toString()}`,
        title: this.u.randomWords(20, 35),
        description: "",
        link: image.url,
        image: `/assets/stock/${image.id}-600x315.webp`
      };
      this.cards.push(card);
    }
  }
}
