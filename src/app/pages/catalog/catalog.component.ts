import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import randomWords from "random-words";
import { Card } from 'src/app/components/site-card/card.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(
    public readonly u: UtilityService
  ) {
    // this.generateCards(this.cardQty);
  }

  public cardQty = 50;
  public cards: Card[] = [];

  ngOnInit(): void {
    this.generateCards(this.cardQty);
  }

  generateCards(qty: number): void {

    this.cards = [];

    for (let i = 0; i < qty; i++) {

      const card = new Card(
        randomWords({ min: 3, max: 8, join: ' ', maxLength: 50 }),
        randomWords({ min: 10, max: 20, join: ' ', maxLength: 100 }),
        `https://picsum.photos/id/${10 + i}/1200/630`,
        `https://picsum.photos/id/${10 + i}/1200/630`
      );

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

    console.log("cards", this.cards);
  }
}
