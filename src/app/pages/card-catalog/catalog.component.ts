import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { UtilityService } from 'src/app/services/utility.service';
import { Card } from 'src/app/components/site-card/card.model';
import { Image } from './image.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

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

  public page = 1;
  public pageSize = 18;
  public cardMax = 800;
  public cards: Card[] = [];

  ngOnInit(): void {

    // show first page
    this.showMore(false);
  }

  showMore(doScroll: boolean): void {

    // increment page
    // intentionally skipping first page (boring images)
    this.page++;

    const url = `https://picsum.photos/v2/list?page=${this.page}&limit=${this.pageSize}`;
    let scrollId = "";

    // get images
    this.http.get<Image[]>(url)
      .subscribe({

        next: (images: Image[]) => {

          for (const image of images) {

            // define new card
            const card = {
              id: `card-${image.id.toString()}`,
              title: `Photo by ${image.author}`,
              description: this.u.randomWords(25, 130, "."),
              link: image.url,
              image: `https://fwd.facioquo.com/pics/id/${image.id}/600/315.webp`
            };

            // add to collection
            if (this.cards.length < this.cardMax)
              this.cards.push(card);

            // set scroll target to first new card
            // (only if not already set)
            if (images.indexOf(image) === 0) {
              scrollId = card.id;
            }
          }
        },

        // log error
        error: (e: HttpErrorResponse) => { console.log(e); },

        // scroll to first new card
        complete: () => {
          if (doScroll) this.u.scrollToStart(scrollId, 500);
        }
      });
  }

  showAll(): void {

    const remCards = this.cardMax - this.cards.length
    const remPages = Math.ceil(remCards / this.pageSize);
    const lastIndex = this.cards.length - 1;

    // add remaining cards
    for (let i = 0; i < remPages; i++) {
      this.showMore(false);
    }

    // scroll to first new card
    const lastCard = this.cards[lastIndex];
    this.u.scrollToStart(lastCard.id, 500);
  }
}
