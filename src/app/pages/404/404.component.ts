import { Component } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss']
})
export class PageNotFoundComponent {

  constructor(
    private readonly u: UtilityService
  ) {

    const title = "Page not found | Idea book for USWDS"

    this.u.pushMetaTags([
      {
        name: 'robots',
        content: 'noindex, nofollow'
      },
      {
        property: 'og:title',
        content: title
      },
      {
        name: 'description',
        content: title
      },
      {
        property: 'og:description',
        content: title
      },
    ]);
  }
}
