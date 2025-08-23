import { Component, inject } from '@angular/core';

import {
  UtilityService,
  SITE_DESCRIPTION,
  SITE_TITLE
} from 'src/app/services/utility.service';

import { type Card, PATTERNS } from '../patterns.model';
import { SiteCardComponent } from '../../components/site-card/site-card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [SiteCardComponent]
})
export class HomeComponent {
  readonly u = inject(UtilityService);


  constructor() {
    this.u.pushMetaTags([
      {
        property: 'og:title',
        content: SITE_TITLE
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

