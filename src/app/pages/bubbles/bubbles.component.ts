import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';
import { Image, IMAGES } from '../image.model';

export const ID = "bubbles";

@Component({
  selector: ID,
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {

  public pattern: Card = this.u.getPatternCard(ID);

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.pushMetaTagsForPattern(ID);
  }

  public cards: Card[] = [];
  private images: Image[] = IMAGES;

  ngOnInit(): void {

    // make random cards
    let max = 7;
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
