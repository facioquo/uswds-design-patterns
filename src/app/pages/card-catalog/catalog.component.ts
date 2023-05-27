import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  constructor(
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'A card catalog with fixed image aspect ratio, consistent section sizing, full-surface clickability (to replace the button), a hover effect, and "see more" pagination.'
      }
    ]);
  }

  public cardQty = 500;
  public pageQty = 0;
  public pageSize = 18;
  public nextQty = Math.min(this.pageSize, this.cardQty - this.pageQty);
  public totalCards: Card[] = [];
  public shownCards: Card[] = [];

  ngOnInit(): void {
    this.generateCards(this.cardQty);
  }

  generateCards(qty: number): void {

    this.totalCards = [];

    // known bad image ids
    const badIds = [
      86, 97, 105, 138, 140, 148, 150, 205, 207, 224, 226,
      245, 246, 262, 285, 286, 298, 303, 332, 333, 346,
      359, 394, 414, 422, 438, 462, 463, 470, 489
    ];

    for (let i = 0; i < qty; i++) {

      // placeholder image
      let url = `https://picsum.photos/id/491/1200/630.webp`;

      // random image
      if (!badIds.includes(10 + i)) {
        url = `https://picsum.photos/id/${10 + i}/1200/630.webp`;
      }

      // card contents
      const card: Card = {
        id: `card-${i}`,
        title: this.u.randomWords(25, 60),
        description: this.u.randomWords(25, 100, "."),
        image: url,
        link: url
      };

      this.totalCards.push(card);
    }

    // show first page
    this.showMore();
  }

  showMore(scroll: boolean = false): void {
    this.pageQty += this.nextQty;
    this.shownCards = this.totalCards.slice(0, this.pageQty);

    if (scroll) {
      this.u.scrollToStart(`card-${this.pageQty - this.nextQty}`);
    }

    this.nextQty = Math.min(this.pageSize, this.cardQty - this.pageQty);
  }

  showAll(scroll: boolean = false): void {
    this.nextQty = this.totalCards.length - this.shownCards.length;
    this.showMore(scroll);
  }
}
