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
    "description": "Do you have an ideas to share on our site?  Send us a link or a screenshot.",
    "link": "https://github.com/facioquo/uswds-design-patterns/issues/new?labels=enhancement&template=feature_request.md",
    "image": "add",
    "imageType": "usa-icon"
  }
}

