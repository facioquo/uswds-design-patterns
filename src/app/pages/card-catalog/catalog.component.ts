import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';

import * as picList from 'src/assets/pics/pics.json';
import { Image } from './image.model';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: [
    'catalog.component.scss',
    'catalog.settings.scss'
  ]
})
export class CatalogComponent implements OnInit {

  images: Image[] = picList;
  autoScroll = false;
  classic = false;

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
    this.resetCatalog();
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
      const card = {
        id: `card-${image.id.toString()}`,
        title: this.u.randomWords(25, 65),
        description: `<small>Photo by ${image.author}.</small><br />${this.u.randomWords(25, 90)}.`,
        link: image.url,
        image: `/assets/pics/${image.id}-600x315.webp`
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


  // PAGINATION SETTINGS

  changeTotalCards() {
    // maintain a rational page size
    this.pageMax = Math.min(180, this.totalCards);
    this.pageSize = Math.min(this.pageSize, this.pageMax);
    this.resetCatalog();
  }

  updatePageCount() {
    this.pages = Math.ceil(this.totalCards / this.pageSize);
  }

  resetCatalog() {
    this.cards = [];
    this.updatePageCount();
    this.showPage(1, false);
  }
}
