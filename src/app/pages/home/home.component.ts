import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { UtilityService } from 'src/app/services/utility.service';

import { Card } from 'src/app/components/site-card/card.model';
import { CARD_LIST } from './patterns.model';

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
        content: 'A design pattern idea book for designers and developers using the U.S. Web Design System (USWDS), built by community enthusiasts.'
      }
    ]);
  }

  // landing page card data
  public cards: Card[] = CARD_LIST;

  // ghost card for suggestions
  public suggestionCard: Card = {
    "id": "ghost-card",
    "title": "» make a suggestion",
    "description": "What are we missing?  Send us new design pattern ideas.",
    "link": "https://github.com/facioquo/uswds-design-patterns/issues/new?labels=enhancement&template=feature_request.md",
    "image": "add",
    "imageType": "usa-icon"
  }
}

