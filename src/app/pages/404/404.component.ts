import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss']
})
export class PageNotFoundComponent {

  constructor(
    private meta: Meta
  ) {
    this.meta.addTags([
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]);
  }
}
