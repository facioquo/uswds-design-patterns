import { Component } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';

import {
  UtilityService,
  URL_IMAGE_SOCIAL
} from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private readonly u: UtilityService
  ) {
    const tags: MetaDefinition[] = [
      {
        name: 'image',
        content: URL_IMAGE_SOCIAL
      },
      {
        property: 'og:image',
        content: URL_IMAGE_SOCIAL
      }
    ]

    this.u.publishMetaTags(tags);
  }
}
