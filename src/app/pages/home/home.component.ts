import { Component } from '@angular/core';

import {
  UtilityService,
  URL_IMAGE_SOCIAL,
  SITE_DESCRIPTION,
  SITE_TITLE
} from 'src/app/services/utility.service';

import { Card, PATTERNS } from '../patterns.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.pushMetaTags([
      {
        property: 'og:title',
        content: SITE_TITLE
      },
      {
        name: 'image',
        content: URL_IMAGE_SOCIAL
      },
      {
        property: 'og:image',
        content: URL_IMAGE_SOCIAL
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION
      },
      {
        property: 'og:description',
        content: SITE_DESCRIPTION
      },
    ]);
  }

  // landing page card data
  public cards: Card[] = PATTERNS;

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

