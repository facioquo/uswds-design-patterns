import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Card } from 'src/app/components/site-card/card.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public readonly u: UtilityService,
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Design patterns using the U.S. Web Design System.'
      }
    ]);
  }

  public cards: Card[] = [
    {
      id: 'card-catalog',
      title: 'Card catalog',
      description: 'A catalog of <strong>Cards</strong> with consistent vertical spacing and “show more” pagination.',
      link: '/card-catalog',
      image: '/assets/thumbnails/card-catalog.jpg'
    },
    {
      id: 'hero-overlay',
      title: 'Hero callout overlay',
      description: 'A full-width <strong>Hero</strong> callout overlay with semi-transparent background and faded edge.',
      link: '/hero-overlay/#hero',
      image: '/assets/thumbnails/hero-overlay.png'
    },
    {
      id: 'process-list-nav',
      title: 'Sticky process menu',
      description: 'A matching sticky <strong>Side Navigation</strong> menu for the <strong>Process List</strong>.',
      link: '/process-list-nav',
      image: '/assets/thumbnails/process-list-nav.png'
    }
  ];
}

