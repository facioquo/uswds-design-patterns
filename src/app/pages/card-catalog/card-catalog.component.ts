import { Component, OnInit } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';
import { Image, IMAGES } from '../image.model';

export const ID = "card-catalog";

@Component({
  selector: ID,
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.scss']
})
export class CardCatalogComponent implements OnInit {

  images: Image[] = IMAGES;
  autoScroll = false;
  classic = false;

  public pattern: Card = this.u.getPatternCard(ID);

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.updateMetaTags(ID);
  }

  public page = 0;
  public pages = 0;
  public pageSize = 24;
  public pageMax = 180;
  public maxCards = 840;
  public totalCards = this.maxCards;

  public cards: Card[] = [];
  public cardStart = 1;
  public cardEnd = this.cardStart + this.pageSize;

  ngOnInit(): void {

    // load initial page
    this.resetCardCatalog();
  }

  showPage(page: number, skipScroll: boolean = false): void {

    // increment page
    this.page = page;
    let scrollId = "";

    // get images
    this.cardStart = (this.page - 1) * this.pageSize + 1;
    this.cardEnd = this.cardStart - 1;

    const idxStart = this.cardStart - 1;
    const idxEnd = this.cardStart + this.pageSize - 1;

    // only show current page (classic pagination)
    if (this.classic) {
      this.cards = [];
    }

    // add new cards
    for (let i = idxStart; i < idxEnd; i++) {

      const image = this.images[i];

      // define new card
      const card: Card = {
        id: `card-${image.id.toString()}`,
        title: this.u.randomWords(15, 65),
        description: `<small>Photo by ${image.author}.</small><br />${this.u.randomWords(25, 90)}.`,
        link: image.url,
        image: `/assets/stock/${image.id}-600x315.webp`
      };

      // set scroll target to first new card
      // (only if not already set)
      if (i === idxStart) {
        scrollId = card.id;
      }

      // add to collection
      if (i < this.totalCards) {
        this.cards.push(card);
        this.cardEnd++;
      }
      else return;
    }

    // scroll when appropriate
    if (this.autoScroll && !skipScroll)
      this.u.scrollToStart(scrollId, 500);
  }

  showAll(): void {

    const nextCard = this.images[this.page * this.pageSize + 1];

    // add remaining cards
    for (let i = this.page; i < this.pages; i++) {
      this.showPage(i, true);
    }

    // scroll to first new card
    if (this.autoScroll)
      this.u.scrollToStart(`card-${nextCard.id}`, 500);
  }


  // CATALOG SETTINGS

  changeTotalCards() {
    // maintain a rational page size
    this.pageMax = Math.min(180, this.totalCards);
    this.pageSize = Math.min(this.pageSize, this.pageMax);
    this.resetCardCatalog(true);
  }

  changePageSize() {
    this.cards = [];
    this.updatePageCount();
    this.showPage(1, true);
    this.u.scrollToEnd(`settings`, 0);
  }

  updatePageCount() {
    this.pages = Math.ceil(this.totalCards / this.pageSize);
  }

  resetCardCatalog(skipScroll = false) {
    this.cards = [];
    this.updatePageCount();
    this.showPage(1, skipScroll);
  }
}
