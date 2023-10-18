import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';

import { Card } from 'src/app/components/site-card/card.model';
import { Image, IMAGES } from '../card-catalog/image.model';

@Component({
  selector: 'app-hero-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.updateMetaTags("bubbles");
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
