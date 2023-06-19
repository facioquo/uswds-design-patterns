import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';

import * as picList from 'src/assets/pics/pics.json';
import { Image } from './image.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  images: Image[] = picList;

  constructor(
    public readonly u: UtilityService,
    private readonly http: HttpClient,
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
  public pageSize = 18;
  public totalCards = 800;
  public cards: Card[] = [];

  ngOnInit(): void {

    // show first page
    this.showMore(false);
    console.log("images", this.images);
  }

  showMore(doScroll: boolean): void {

    // increment page
    this.page++;
    let scrollId = "";

    // get images
    const idxStart = this.page * this.pageSize - this.pageSize;
    const idxEnd = idxStart + this.pageSize;

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

      // add to collection
      if (this.cards.length < this.totalCards)
        this.cards.push(card);

      // set scroll target to first new card
      // (only if not already set)
      if (i === idxStart) {
        scrollId = card.id;
      }
    }

    if (doScroll) this.u.scrollToStart(scrollId, 500);
  }

  showAll(): void {

    const remCards = this.totalCards - this.cards.length
    const remPages = Math.ceil(remCards / this.pageSize);
    const nextCard = this.images[this.page * this.pageSize + 1];

    // add remaining cards
    for (let i = 0; i < remPages; i++) {
      this.showMore(false);
    }

    // scroll to first new card
    this.u.scrollToStart(`card-${nextCard.id}`, 500);
  }
}
