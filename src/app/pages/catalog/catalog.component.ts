import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';

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

    // known bad image ids
    const badIds = [
      86, 97, 105, 138, 140, 148, 150, 205, 207, 224, 226,
      245, 246, 262, 285, 286, 298, 303, 332, 333, 346,
      359, 394, 414, 422, 438, 462, 463, 470, 489
    ];

    for (let i = 0; i < qty; i++) {

      // placeholder image
      let url = `https://picsum.photos/id/491/1200/630`;

      // random image
      if (!badIds.includes(10 + i)) {
        url = `https://picsum.photos/id/${10 + i}/1200/630`;
      }

      // card contents
      const card = new Card(
        this.u.randomWords(25, 60),
        this.u.randomWords(25, 100, "."),
        url,
        url
      );

      this.cards.push(card);
    }
  }
}
