import { Component, inject } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-404',
    templateUrl: './404.component.html',
    styleUrls: ['./404.component.scss'],
    imports: [RouterLink]
})
export class PageNotFoundComponent {
  private readonly u = inject(UtilityService);


  constructor() {

    const description = "This is not a page.  Try again.";

    this.u.pushMetaTags([
      {
        name: 'robots',
        content: 'noindex, nofollow'
      },
      {
        property: 'og:title',
        content: "Page not found"
      },
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:description',
        content: description
      },
    ]);
  }
}
