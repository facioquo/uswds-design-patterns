import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';

import randomWords from "random-words";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(
    public readonly u: UtilityService
  ) { }

  public cardQty = 500;
  public cards: Card[] = [];

  ngOnInit(): void {
    this.generateCards(this.cardQty);
  }

  generateCards(qty: number): void {

    this.cards = [];

    for (let i = 0; i < qty; i++) {

      // placeholder image
      const url = `https://picsum.photos/id/${10 + i}/1200/630`;

      // card contents
      const card = new Card(
        randomWords({ min: 3, max: 8, join: ' ', maxLength: 50 }),
        randomWords({ min: 10, max: 20, join: ' ', maxLength: 100 }),
        url,
        url
      );

      // capitalize first letter of title and description
      card.title = card.title
        .slice(0, 1)
        .toUpperCase()
        .concat(card.title.slice(1));

      card.description = card.description
        .slice(0, 1)
        .toUpperCase()
        .concat(card.description.slice(1))
        .concat(".");

      this.cards.push(card);
    }
  }
}
