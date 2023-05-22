import { Component, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/components/site-card/card.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(
    public readonly u: UtilityService
  ) { }

  public cards: Card[] = [
    {
      id: 'card-catalog',
      title: 'Card catalog',
      description: 'A catalog of <strong>Cards</strong> with consistent vertical spacing and "see more" pagination.',
      image: 'https://designsystem.digital.gov/img/introducing-uswds-3/introducing-uswds-3.svg',
      link: '/catalog'
    }
  ];
}

