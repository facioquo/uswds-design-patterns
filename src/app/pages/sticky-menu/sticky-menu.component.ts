import { Component } from '@angular/core';

import { UtilityService } from 'src/app/services/utility.service';
import { Card } from '../patterns.model';

export const ID = "sticky-menu";

@Component({
  selector: ID,
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent {

  public pattern: Card = this.u.getPatternCard(ID);

  constructor(
    public readonly u: UtilityService
  ) {
    this.u.updateMetaTags(ID);
  }
}
