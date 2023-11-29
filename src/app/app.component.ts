import { Component, isDevMode } from '@angular/core';

import {
  UtilityService,
  SITE_TITLE,
  SITE_DESCRIPTION,
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
    this.u.pushMetaTags([
      {
        property: 'og:site_name',
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
      {
        name: 'image',
        content: URL_IMAGE_SOCIAL
      },
      {
        property: 'og:image',
        content: URL_IMAGE_SOCIAL
      }
    ]);

    if (isDevMode()) {
      this.u.pushMetaTags([
        {
          name: 'robots',
          content: 'noindex, nofollow'
        }]);
    }
  }
}
