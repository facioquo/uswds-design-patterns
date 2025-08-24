import { Component, isDevMode, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SiteIdentifierComponent } from "./components/site-identifier/site-identifier.component";
import { SiteBannerComponent } from "./components/site-banner/site-banner.component";

import {
  UtilityService,
  SITE_TITLE,
  SITE_DESCRIPTION,
  URL_IMAGE_SOCIAL
} from "./services/utility.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [RouterOutlet, SiteBannerComponent, SiteIdentifierComponent]
})
export class AppComponent {
  private readonly u = inject(UtilityService);


  constructor() {
    this.u.pushMetaTags([
      {
        property: "og:site_name",
        content: SITE_TITLE
      },
      {
        name: "description",
        content: SITE_DESCRIPTION
      },
      {
        property: "og:description",
        content: SITE_DESCRIPTION
      },
      {
        name: "image",
        content: URL_IMAGE_SOCIAL
      },
      {
        property: "og:image",
        content: URL_IMAGE_SOCIAL
      }
    ]);

    if (isDevMode()) {
      this.u.pushMetaTags([
        {
          name: "robots",
          content: "noindex, nofollow"
        }]);
    }
  }
}
