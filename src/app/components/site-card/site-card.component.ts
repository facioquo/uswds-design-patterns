import { Component, Input } from '@angular/core';
import { Card } from './site-card.model';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.scss']
})
export class SiteCardComponent {
  @Input() card!: Card;
}
