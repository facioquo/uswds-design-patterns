import { Component, Input } from '@angular/core';
import { Card } from './card.model';

@Component({
    selector: 'app-site-card',
    templateUrl: './site-card.component.html',
    styleUrls: ['./site-card.component.scss'],
    standalone: false
})
export class SiteCardComponent {
  @Input() card!: Card;
  @Input() i!: number;
}
