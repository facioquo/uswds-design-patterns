import { Component } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';

import {
  UtilityService,
  URL_IMAGE_SOCIAL,
  SITE_DESCRIPTION
} from 'src/app/services/utility.service';

import { Card, CARD_LIST } from './patterns.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public readonly u: UtilityService
  ) {
    const tags: MetaDefinition[] = [
      {
        name: 'image',
        content: URL_IMAGE_SOCIAL
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION
      },
      {
        property: 'og.image',
        content: URL_IMAGE_SOCIAL
      },
      {
        property: 'og.description',
        content: SITE_DESCRIPTION
      },
    ]

    this.u.publishMetaTags(tags);
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

