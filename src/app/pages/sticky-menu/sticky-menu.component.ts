import { Component } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-hero-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent {

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.updateMetaTags("sticky-menu");
  }
}
