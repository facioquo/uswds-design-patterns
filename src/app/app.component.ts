import { Component } from '@angular/core';

import {
  UtilityService,
  URL_IMAGE_SOCIAL,
  SITE_TITLE,
  SITE_DESCRIPTION
} from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private readonly u: UtilityService
  ) {
    this.u.pushMetaTags([
      {
        property: 'og:site_name',
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
      }
    ]);
  }
}
